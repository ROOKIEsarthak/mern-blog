import dotenv from 'dotenv'
import { app } from './app.js'
import {connectDb} from './src/db/index.js'

const PORT = process.env.PORT || 8000

dotenv.config({
    path: './env',
})

connectDb().then(()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Server started on PORT -: ${PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR: ",error);
        throw err;
    }
})
.catch((err)=>{
    console.log("MongoDB connection failed !!! " , err);
})