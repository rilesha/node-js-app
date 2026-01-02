import express from "express";
import {  getAllUsers, getUserDetails, login, register } from "../controllers/user.js";

const router = express.Router();

router.get("/",(req,res)=>{
res.send("hi my friend")
});

router.get("/all",getAllUsers)
router.post("/login",login)
router.post("/register",register)
router.post("/new",getUserDetails)


export default router;