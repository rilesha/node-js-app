import express, { json } from "express";
import router from "./routes/user.js"
import { connectDb } from "./data/database.js";
import { config } from "dotenv";

const app = express();

config({
  path:"./data/config.env"
})

connectDb();

app.use(express.json())
app.use(router)


app.listen(process.env.PORT,()=>{
  console.log("connecteed");
});