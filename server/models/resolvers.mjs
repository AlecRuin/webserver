import {POSTS} from "../schemas/index.mjs"
import { Log } from "../utils/logging.mjs";
export const resolvers ={
    Query:{
        hello:()=>{
            console.log("queried!");
            
            return "world"
        },
        GetAllPosts:async()=>{
            try {
                return await POSTS.find()
            } catch (error) {
                Log(new Error(),error)
                return error
            }
        },
        GetPostByPostName:async(parent,{PostName})=>{
            try {
                return await POSTS.findOne({post_title:PostName})
            } catch (error) {
                Log(new Error(),error)
                return error
            }
        }
    }
}