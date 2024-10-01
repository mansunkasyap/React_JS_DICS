import { v2 as cloudinary } from 'cloudinary';
import fs from 'node:fs';
const uploadOnCloudinary =async (localImagePath)=>{

    const cloud = cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    const response = await cloudinary.uploader.upload(localImagePath,{
        resource_type: "auto"
    })
    if (response) {
        fs.unlinkSync(localImagePath)
        console.log("delete Sucessfully...");
        
    }
    return response;
}
    // Configuration
   

    export default uploadOnCloudinary;
