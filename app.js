import express, { json } from "express";
import router from "./routes/user.js"
import { connectDb } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

config({
  path:"./data/config.env"
})

connectDb();

app.use(express.json())//For middleware
app.use(cookieParser())
app.use("/users",router)//For Routes


app.listen(process.env.PORT,()=>{
  console.log("connected");
});