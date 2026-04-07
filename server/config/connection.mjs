import dotenv from "dotenv"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
const __DIRNAME = dirname(fileURLToPath(import.meta.url))
dotenv.config({path:join(__DIRNAME,"../../.env")})
import mongoose from "mongoose";
console.log("process.env.MONGODB_URI: ",process.env.MONGODB_URI);

const CONNECTION = mongoose.connect(process.env.MONGODB_URI)
export default CONNECTION