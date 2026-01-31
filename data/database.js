import mongoose from "mongoose";

export const connectDb = async() =>{
await  mongoose.connect( process.env.MONGO_URL,{
  dbName:"users",
})
.then(()=>{ console.log("Mongoose Sucessfully connected");})
.catch((e)=>{console.log(e)});
} 
//mongodb://localhost:27017