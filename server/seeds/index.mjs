import Post from "./Posts.json" assert {type:"json"}
import {SWOGGERSLOL_CONNECTION} from "../config/connection.mjs"
import { POSTS } from "../schemas/index.mjs"
await SWOGGERSLOL_CONNECTION
await POSTS.deleteMany();
await POSTS.insertMany(Post)