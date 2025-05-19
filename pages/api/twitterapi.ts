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
  console.log(session)
  const token = await getToken({req ,
  secret : process.env.NEXTAUTH_SECRET
  });
  console.log(token)
  console.log(JSON.stringify(token))
const obj=JSON.stringify(token?.token)

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
 
  const descriptionText="GRUMPY KATZ NFT is live Now\n\n See What I have got !!!"
const img=catMeme
imageToBase64(img) // Image URL
    .then(
        (response: any) => {

            bot.post("media/upload", { media_data: response }, (err: string, data: { media_id_string: any; }, response: any) => {
              if (err) {
                console.log("dah error is" + err);
              } else {
                console.log(data);
                const metaParams = {
                  status: descriptionText,
                  media_id: data.media_id_string,
                };
                console.log(metaParams);
          
                
                bot.post("media/metadata/create", metaParams, function(err: string, data: any, response: string) {
                  if (err) {
                    console.log("da metadata error " + err);
                  } else {
                  
                    console.log("addMetaData response " + response);
                    const params = {
                      status: metaParams.status,
                      media_ids: metaParams.media_id
                    };
                    bot.post("statuses/update", params, function(err: any, data: any, response: any) {
                      if (err) {
                        console.log("error!", err);
                        return res.json({
                          message: new Error(err).message,
                          success: false,
                      });
                      } else {
                        console.log("success !");
                        return res.json({
                          message: 'Shared Meme Successfully',
                          success: true,
                      });
                      }
                    });
                  } 
                });
              }
            }); 

        }
    )
    .catch(
        (error: any) => {
            console.log(error); // Logs an error if there was one
        }
    )

  // app.listen(3001, function () {
  //       console.log('Listening on http://localhost:3001/');
  //   });
} 

export default async function handler(req: { method: any; }, res: any) {
    switch (req.method) {
       

        case 'POST': {
            return uploadPhoto(req,res);
        }

       
    }
}