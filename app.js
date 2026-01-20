import express, { json } from "express";
import router from "./routes/user.js"
import { connectDb } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRoute from "./routes/task.js"

const app = express();

config({
  path:"./data/config.env"
})

connectDb();
//For middleware
app.use(express.json())
app.use(cookieParser())
//For Routes 
app.use("/users",router)
app.use("/task",taskRoute)



app.listen(process.env.PORT,()=>{
  console.log("connected");
});