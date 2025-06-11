import "dotenv/config"
import mongoose from "mongoose";
console.log("process.env.MONGODB_URI: ",process.env.MONGODB_URI);

const CONNECTION = mongoose.connect(process.env.MONGODB_URI)
export default CONNECTION