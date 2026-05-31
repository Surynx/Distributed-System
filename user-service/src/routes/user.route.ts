import express from "express";
import { VerifyService } from "../middleware/verifyService";
import { userController } from "../di/container";

export const route = express.Router();

route.get("/home",VerifyService,userController.getUser);

route.post("/internal/adduser",VerifyService,userController.addUser);