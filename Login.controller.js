import User from "../models/user.model.js";
async function LoginController (req, res, next){
    const {username ,password} = req.body;
    console.log(req.body);
    console.log(req.method);
    
    const existedUser = await User.findOne({$and: [{username}] })
    const recheck = await existedUser.comparePassword(password);
    console.log(recheck);
    
    if (existedUser && recheck) {
        console.log("login sucessfully..")

        res.status(201).json({
            statuss : "submit",
            message : "Registration Successfull",
            user :{
                username ,password
            }})
        
    }else{
        res.status(401).json({
            message : "Invalid Credentials"
        })
        console.log("login failed..")
    }
    
}
export default LoginController