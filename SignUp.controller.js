import User from "../models/user.model.js";
import ApiERR from "../models/utlits/ApiERR.js";
// import cloudinary from "../models/utlits/Cloudinary.js";
import path from 'node:path'
import uploadOnCloudinary from "../models/utlits/Cloudinary.js";
import { log } from "node:console";

async function SignUpController(req, res, next){

    try {
        
   
const {username ,fullname,email,password,confpassword,avatar} = req.body;
// console.log(req.files.avatar[0].filename);
console.log( req.files);


// console.log("File Name", filename);

const required =[username ,fullname,email,password,confpassword,avatar].some((filed) => {
    return filed ===""
});
// console.log(req.body);
 
console.log(required);

const existedUser = await User.findOne({ $or:[{email}, {username }]})
//   console.log("Already Exist....",existedUser);
  
if (existedUser) {    
    res.status(409).json({
        status : 200,
        message : "Already Exist"
    })
    console.log("existed............");
  
}else{

console.log(`
    username = ${username} ,
    fullname = ${fullname},
    email = ${email} ,
    password = ${password},
    confpassword = ${confpassword}`);
// console.log(`../public/temp/${filename}`);


const localImagePath = req.files.avatar[0].path;
console.log(localImagePath);

const cloudinaryRes= await uploadOnCloudinary(localImagePath) 
// const uploadResult = await cloudinary.uploader.upload(localImagePath)
// console.log("Upload res: ", uploadResult);
console.log(cloudinaryRes);

const url = cloudinaryRes.url;

await User.create({username ,fullname,email,password,confpassword, avatar : url})
    
   

    res.status(201).json({
        statuss : "submit",
        message : "Registration Successfull",
        user :{
            username ,fullname,email,password,confpassword
        }
    });

}
} catch (error) {
    console.log(error);
        
}
}
export default SignUpController;