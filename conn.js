import mongoose from "mongoose";
import {config} from "dotenv";


config({path : "./.env"})
console.log(process.env.CONNECTION);



async function Connect() {
try {
    const conn = mongoose.connect(`${process.env.CONNECTION}`)
    console.log("connect.......");
    
} catch (error) {
    console.log("erorrrrrrr...." ,error);
    mongoose.disconnect();
}
}

export default Connect;