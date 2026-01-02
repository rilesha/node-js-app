import mongoose from "mongoose";

export const connectDb = () =>{
  mongoose.connect( process.env.MONGO_URL,{
  dbName:"users",
})
.then(()=>{ console.log("Mongoose Sucessfully connected");})
.catch((e)=>{console.log(e)});
} 