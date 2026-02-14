import express, { json } from "express";
import router from "./routes/user.js";
import { connectDb } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRoute from "./routes/task.js";
import { errorHandler } from "./middleware/error.js";
import cors from "cors";

const app = express();

config({
  path:"./data/config.env"
})

connectDb();

//For middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["POST","GET","PUT","DELETE"],
  credentials: true,                   //we can't sent header to frontend if it's false
}))


//For Routes 
app.get("/",(req,res)=>{
  res.send("hi hello");
})
app.use("/users",router)
app.use("/task",taskRoute)


//Error handler
app.use(errorHandler)


app.listen(process.env.PORT,()=>{
  console.log(`server is running on ${process.env.PORT} on ${process.env.NODE_ENV} mode`);
});