import type { Request,Response } from "express"

export default class UserController {

    private authService

    constructor(authService : any) {

        this.authService = authService;
    }


    addUser = async ( req:Request,res:Response ) => {

        try{

            let { email,name } = req.body;

            let response = await this.authService.addUser(email,name);

            res.status(200).json({response});

        }catch(err) {

            if(err instanceof Error) {
                
                console.log(err.message);
                res.status(500).json({success:false,mess:err.message});
            }
        }
    }


    getUser = async( req:Request,res:Response ) => {

        let id = req.headers["x-user-id"];

        const user = await this.authService.getUser(id as string);

        res.status(200).json(user);
    }
}