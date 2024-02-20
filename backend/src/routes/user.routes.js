import { Router } from "express";
//import express from 'express'
import { testUser , registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/test").post(testUser)

router.route('/sign-up').post(registerUser)

export default router