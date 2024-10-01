import mongoose from 'mongoose';
import User from './models/user.model.js';
// const mongoose = require('mongoose');
// const { default: User } = require('./models/user.model');
// const uri = "mongodb+srv://duamayank26:brgZjbiiHwm2scsX@cluster0.6ueys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

import { connect } from "mongoose";
import app from "./App.js";
import Connect from "./Db/conn.js"


Connect().then(()=>{
app.listen(process.env.PORT||3000,()=>{
console.log(process.env.PORT,"porttttt...");

})
}).catch((err)=>{
  console.log("errrrrr..." ,err);
  
})













// import {config} from "dotenv";


// config({path : "./.env"})
// console.log(process.env.CONNECTION);



// // const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(process.env.CONNECTION);
//     // await mongoose.connection.db.admin().command({ ping: 1 });
//     // console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   const user = new User(
//     {
//       username: "Mayank",
//       password :"21212",
//       pincode : 121001,
//       phone :9625820226,
//       Image : "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
//       email : "duamayank26@gamil.com"

//     }
//   )
//   await user.save();
//   // const u1 = await mongoose.findOne({ username: "Mayank"})
//   // console.log(u1);
  
//   console.log("innnnnnn.......🚀🚀🚀");
  
//   }
//   catch(err){
//     console.log(err);
//     await mongoose.disconnect()
//   }
// }
// run().catch(console.dir);
