import express, { Request, Response } from "express";
import { proxyHandler } from "../middleware/proxyHandler";
import { createProxyMiddleware } from "http-proxy-middleware";
import { verifyToken } from "../middleware/authMiddleware";
import { CONFIG } from "../conf/conf";

export const router = express.Router();

router.get("/",( req:Request ,res:Response )=>{

    res.send("API Gateway");
});

router.use("/auth",createProxyMiddleware({
    target:CONFIG.SERVICES.AUTH,
    changeOrigin:true,
    on:{
        proxyReq:(proxyreq,req,res) => {

            proxyreq.setHeader("x-service-key","secret@123");
        }
    }
}));

router.use("/user",verifyToken,createProxyMiddleware({
    target:CONFIG.SERVICES.USER,
    changeOrigin:true,
    on:{ proxyReq:proxyHandler }
}));

router.use("/profile",verifyToken,createProxyMiddleware({
    target:CONFIG.SERVICES.PROFILE,
    changeOrigin:true,
    on:{ proxyReq:proxyHandler }
}));

router.use("/order",verifyToken,createProxyMiddleware({
    target:CONFIG.SERVICES.ORDER,
    changeOrigin:true,
    on:{ proxyReq:proxyHandler }
}));