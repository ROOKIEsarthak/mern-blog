import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {ApiResponse} from '../utils/ApiResponse.js'



const testUser = asyncHandler(async(req,res)=>{
    return res
    .status(200)
    .json({message:`api working on port : ${process.env.PORT}`})
        
})

const registerUser = asyncHandler(async(req,res)=>{

    const {username , email , password} = req.body

    // -----> check the availability of all the fields
    
    if ([username , email , password].some((field)=>field?.trim() === "")) 
    {
        throw new ApiError(400, " All fields are required ")
    }


    // ---> check if any user with same username or email exists

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if (existedUser)
    {
        throw new ApiError (409 , " User with email or username already exists")
    }

    
    // ---> create a new user

    const newUser = await User.create({
        username:username.toLowerCase(),
        email,
        password
    })



    // --> check if user created or not
    
    const createdUser = await User.findById(newUser._id).select("-password")

    console.log("created user ->",createdUser);

    return res.status(200).json(
        new ApiResponse(200 , createdUser ,"User registered Successfully")
    )

})

export {
    testUser,
    registerUser,
}