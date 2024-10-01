import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
console.log("holaaaaaaaaaaa");

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: 'mayank'
    },
    fullname: {
        type: String,
        required: true,
        default: 'mayank'
    },
    email: {
        type: String,
        required: true,
        default: 'abc'
    },
    password: {
        type: String,
        required: true,

    },
    confpassword: {
        type: String,
        required: true,

    },
    avatar: {
        type: String,
        required: false,
        default: "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
    },
    refreshtoken: {
        type: String
    }

},
    {
        timestamps: true
    })
userschema.pre("save", async function (next) {

    let handelpass = ''
    if (!this.isModified('password')&& this.isNew) {

       return next();
    }


    try {
    
        // handelpass = await bcrypt.hash(this.password, 10);

        this.password = await bcrypt.hash(this.password, 10);

    } catch (error) {
      throw error;

    }
   
        
         
})
// console.log(bcrypt);

userschema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
    }

userschema.methods.gentrateRefreshToken = function () {
    jwt.sign(
        { username: this.username }
        , process.env.REFRESH_TOKEN),
    {
        expiretime: REFRESH_TOKEN_EXPIRE
    }
}
const User = mongoose.model("user", userschema)
export default User ;
