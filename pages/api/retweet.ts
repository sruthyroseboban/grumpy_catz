const express = require("express");
const app = express();
const Twit = require("twit");
const fs = require("fs");
const path = require("path");
const imageToBase64 = require('image-to-base64');
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";


async function uploadPhoto(req:any,res:any) {

  const session = await getSession({req});
  const token = await getToken({req ,
  secret : process.env.NEXTAUTH_SECRET
  });
  // console.log(JSON.stringify(token))
  //@ts-ignore
const obj=JSON.stringify(token.token)

const acc_token=JSON.parse(obj).account.oauth_token;
const acc_token_secret=JSON.parse(obj).account.oauth_token_secret;

const bot = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token:  acc_token,
    access_token_secret: acc_token_secret,
    strictSSL: true
  });
    // access_token:  token.twitter.accessToken,
    // access_token_secret: token.twitter.refreshToken,
  const body= JSON.parse(req.body);
  const {catMeme}=body
 const img=catMeme
imageToBase64(img) // Image URL
    .then(
        (response: any) => {

            bot.post('statuses/retweet/:id', { id: '1582026891082764288' }, function (err: any, data: any, response: any) {
                    console.log("data",data)
                    if (err) {
                        console.log("error!", err);
                      } else {
                        console.log("success !");
                      }
            }); 

        }
    )
    .catch(
        (error: any) => {
            console.log(error); // Logs an error if there was one
        }
    )
} 

export default async function handler(req: { method: any; }, res: any) {
    switch (req.method) {
       

        case 'POST': {
            return uploadPhoto(req,res);
        }

       
    }
}

  