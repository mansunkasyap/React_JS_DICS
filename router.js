import { Router } from "express";

console.log(upload);

import SignUpController from "../controllers/SignUp.controller.js";
import upload from "../models/utlits/Multer.js";
import LoginController from "../controllers/Login.controller.js";
const router = Router()
router.route('/signup').post(
    upload.fields([{ name: 'avatar', maxCount: 1 }])
    ,
    SignUpController)
    router.route('/login').post(LoginController)
export default router;