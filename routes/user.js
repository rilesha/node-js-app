import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/",(req,res)=>{
res.send("hi my friend")
});

router.get("/me",isAuthenticated, getMyProfile)
router.post("/login", login)
router.post("/register", register)
router.get("/logout",logout)



export default router;