import { user } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";


export const getMyProfile = async(req,res)=>{
  res.status(200).json({
    success: true,
     user: req.user,
  })
  }


export const login = async(req,res)=>{
  const {email,password} = req.body;
  let userExists = await user.findOne({email}).select("+password");//select is used cuz models ma select:false xa

    if(!userExists)
    return res.status(404).json({
    success: false,
    message: "Invalid email or password",
  })

    const isMatched = await bcrypt.compare(password,userExists.password);

    if(!isMatched) 
    return res.status(404).json({
    success: false,
    message: "Invalid email or password",
  })

  sendCookie(userExists,res,`Welcome back ${userExists.name}`,200);
  }


export const register = async(req,res)=>{
  const {name, email, password} = req.body;

  let existingUser  = await user.findOne({ email });

  if(existingUser) return res.status(404).json({
    success: false,
    message: "User already exists",
  })

  const hashedPassword = await bcrypt.hash(password,10);//hashing password
  const newUser = await user.create({
    name,
    email,
    password: hashedPassword,
  })

  sendCookie(newUser,res,"sucessfully created",201);

}

export const logout = async(req,res)=>{
res
.status(200)
.cookie("token","",{expires: new Date(Date.now())})
.json({
  success: true,
  user: req.user,
  message: "successfully logged out",
})

}
