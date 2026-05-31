import { Request, Response } from "express";
import { ClientRequest } from "node:http";

export const proxyHandler = (proxyreq : ClientRequest ,req : Request ,res : Response)=>{

    const user = (req as any).user;

    if(user) {
        proxyreq.setHeader("x-user-id",user.id);
    }

    proxyreq.setHeader("x-service-key","secret@123");
}