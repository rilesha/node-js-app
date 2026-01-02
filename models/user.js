import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name:String,
   name: {
    type: String,
    unique: true,
  },
  email:{
    type: String,
    unique: true,
  },
  password:{
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const user = mongoose.model("user",schema)
