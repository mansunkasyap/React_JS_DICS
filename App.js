import express from "express"
import cors from 'cors'
import LoginController from "./controllers/Login.controller.js"
import router from "./routes/router.js"
import { configDotenv } from "dotenv"
configDotenv({path : './.env'})
const app = express()
// console.log(app.route);
app.use(cors({
    origin : '*',
    methods: 'GET, POST, PUT, DELETE', // Allow necessary HTTP methods
  credentials: true ,
//   allowedHeaders : true
}
))
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',router)
app.get('/', (req, res) => {
    res.send('<h1>Ready To Go 🚀🚀</h1>');
});

export default app;

// (req, res)=>{
//     console.log('/login');
//     res.json({
//         "page": "/login",
//         "admin" : "Mayank"
//     })
// }

// const router = express.Router()


//  router.use('/login', LoginController)

// router.get('/', (req, res)=>{

//     res.send('<h1>Ready To Go 🚀🚀</h1>')
//     // res.
// })



// router.get('/login', (req, res)=>{
//     // console.log(req);
    
//     console.log("Getting the reodlmefel");
//     res.status(200).send("<h1>Teri maa ka Barosa!!</h1>")
    
// })
// app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// app.use(router)