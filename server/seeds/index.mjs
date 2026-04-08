import Post from "./Posts.json" assert {type:"json"}
import {SWOGGERSLOL_CONNECTION} from "../config/connection.mjs"
import { POSTS } from "../schemas/index.mjs"
await new Promise((resolve,reject)=>{
    SWOGGERSLOL_CONNECTION.once("open",resolve)
    SWOGGERSLOL_CONNECTION.once("error",reject)
})
await POSTS.deleteMany();
await POSTS.insertMany(Post)