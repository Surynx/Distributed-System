import express, { Request, Response } from "express";
import { verifyToken } from "../middleware/authMiddleware";
import { authProxy, orderProxy, profileProxy, userProxy } from "../proxy/proxy";

export const router = express.Router();

router.get("/",( req:Request ,res:Response )=>{

    res.send("API Gateway");
});

router.use("/auth",authProxy);

router.use("/user",verifyToken,userProxy);

router.use("/profile",verifyToken,profileProxy);

router.use("/order",verifyToken,orderProxy);