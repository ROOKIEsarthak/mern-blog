import { Router } from "express";
//import express from 'express'
import { testUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/test").post(testUser)

export default router