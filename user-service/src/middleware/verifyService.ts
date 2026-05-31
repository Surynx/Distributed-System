import type { Request,Response,NextFunction } from "express"

export const VerifyService = ( req:Request,res:Response,next:NextFunction ) => {

    let key = req.headers["x-service-key"];

    if(key == "secret@123") {
        next();
        return;
    }

    res.status(403).json({ mess:"forbidden "});
}