import { CONFIG } from "../conf/env";
import { Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { ClientRequest } from "node:http";
import { proxyHandler } from "../middleware/proxyHandler";

export const authProxy = createProxyMiddleware({
    target:CONFIG.SERVICES.AUTH,
    changeOrigin:true,
    on:{
        proxyReq:( proxyreq:ClientRequest ,req:Request ,res:Response ) => {

            proxyreq.setHeader("x-service-key","secret@123");
        }
    }
});

export const userProxy = createProxyMiddleware({
    target:CONFIG.SERVICES.USER,
    changeOrigin:true,
    on:{ proxyReq:proxyHandler }
});

export const profileProxy = createProxyMiddleware({
    target:CONFIG.SERVICES.PROFILE,
    changeOrigin:true,
    on:{ proxyReq:proxyHandler }
});

export const orderProxy = createProxyMiddleware({
    target:CONFIG.SERVICES.ORDER,
    changeOrigin:true,
    on:{ proxyReq:proxyHandler }
});