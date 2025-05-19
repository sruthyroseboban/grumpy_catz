import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter";
export default NextAuth({
    providers: [
        TwitterProvider({
            clientId:"iAbr6a6uImqS1d5HAJWoBfLrb",
            clientSecret:"XjXnPfBQNVkw6eoV6DqE6u1gDyvl4oarHBE4xB2YU4KRDXnkqt",
            // version: "2.0", // opt-in to Twitter OAuth 2.0
        })
    ],
    callbacks:{
        //@ts-ignore
        async jwt(token: any , user: any, account: any , profile: any ,isNewUser: any){
            // if (account.provider && !token[account.provider]){
            //     token[account.provider] = {};
            // }

            // if ( account.accessToken ){
            //     token[account.provider].accessToken=account.accessToken;
            // }

            // if (account.refreshToken ) {
            //     token[account.provider].refreshToken
            // }
            // console.log("token from api",token)
            // console.log(account)
            return token
        }
    },
    secret: process.env.NEXTAUTH_SECRET
})