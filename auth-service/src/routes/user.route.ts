import express from "express";
import { authController } from "../di/container";
import { verifyService } from "../middleware/verifyService";

export const route = express.Router();

route.post("/login",verifyService,authController.loginUser);

route.post("/register",verifyService,authController.registerUser);