import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {ApiResponse} from '../utils/ApiResponse.js'


const testUser = asyncHandler(async(req,res)=>{
    return res.status(200).json({message:`api working on port : ${process.env.PORT}`})
        
})

export {testUser}