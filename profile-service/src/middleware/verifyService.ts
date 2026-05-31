import type { Request,Response,NextFunction } from "express";

export const verifyService = ( req:Request,res:Response,next:NextFunction ) => {

    let header = req.headers["x-service-key"];

    if( header == "secret@123") {

        return next();
    }

    res.status(403).json({ mess:"forbidden "});
}