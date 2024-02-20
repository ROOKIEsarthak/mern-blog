import mongoose from 'mongoose'
import bcrypsjs from 'bcryptjs'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique:true,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
},{timestamps:true}
);

// ----> hashing the password for security just before the saving inside the database

userSchema.pre("save" , async function(next){

    if(!this.isModified("password"))
    {
        return next()
    }

    this.password = await bcrypsjs.hash(this.password,10)
    next()
} )


// ---> checking the password authentication for login

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypsjs.compare(password,this.password)
}



export const User = new mongoose.model("User",userSchema);

