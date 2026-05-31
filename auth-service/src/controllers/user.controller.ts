import type { Request,Response } from "express";

export default class AuthController {

    private authService;

    constructor(authService : any) {
        
        this.authService = authService;
    }

    registerUser = async ( req:Request,res:Response ) => {

        try{
            
            const { name,email,password } : {name:string,email:string,password:string} = req.body;

            const user = await this.authService.registerUser(email,name,password);

            res.status(201).json({
            message:`User ${user.email} is created successfully !!`
            });

         }catch(err:any) {

            console.log(err);
            res.status(500).json(err.message)
        }
    }

    loginUser = async ( req:Request,res:Response ) => {

        try{
            const { email,password } = req.body;

            const response = await this.authService.loginUser(email,password);

            res.status(200).json(response);

        }catch(err) {

            if(err instanceof Error) {
            res.status(500).send(err.message);
            }
        }
    }
    
}