import type { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"

export const verifyToken = async ( req:Request,res:Response,next:NextFunction ) => {
    
  try{
    const header = req.headers["authorization"];

    if (!header) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];

    const decode = jwt.verify(token as string,"secretkey");

    req.user = decode;

    next();
    
  }catch(error) {

    return res.status(401).json({ message: "Invalid token" });
  }

}