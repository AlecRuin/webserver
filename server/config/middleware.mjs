import express from "express"
import {default as cors} from "cors"
import "dotenv/config"
import { default as rateLimit } from "express-rate-limit"
import { expressMiddleware } from "@apollo/server/express4"
import { join } from "path"
const LIMITER = rateLimit({
    windowMs:15*60*1000, //15 mins
    max: 100, //Limit each IP to 100 requests per windowMs
    message:"Too many requests, please try again later."
})
export default function ApplyMiddleware(APP,APOLLO,__DIRNAME){
    APP.use(express.json())
    APP.use(cors({origin:process.env.BASE_URL+":5173"}))
    APP.use(LIMITER)
    APP.set("view engine","ejs")
    APP.set("views","./views/html")

    APP.use("/graphql",expressMiddleware(APOLLO))
    APP.use(express.static(join(__DIRNAME,"../client/dist")))
    APP.use(express.static(join(__DIRNAME,"../client/public")))
}