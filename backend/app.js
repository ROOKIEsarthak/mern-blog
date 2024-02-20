import express, { Router } from 'express';
import cors from 'cors'


export const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials : true 
    },
));


app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb" }));
app.use(express.static("public"))
//app.use(cookieParser())


// Routes Declaration

import UserRouter from './src/routes/user.routes.js';

app.use("/api/user",UserRouter) // test api

