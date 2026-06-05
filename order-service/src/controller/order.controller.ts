import { Request, Response } from "express";

export default class OrderController {

    private orderService

    constructor( orderService:any ) {
        this.orderService = orderService;
    }

    getAllOrder = async ( req:Request,res:Response ) => {

        try{

            let userId = req.headers["x-user-id"];
            userId = String(userId);

            const result = await this.orderService.getAllOrder( userId );

            res.status(200).json(result);

        }catch(err) {

            if(err instanceof Error) {

                console.log(err.message);
                res.status(500).json({error : err.message})
            }
            
        }


    }

    PlaceOrder = async ( req:Request,res:Response ) => {

        try{
            const { product,price } = req.body;
            let userId = req.headers["x-user-id"];
            userId = String(userId);

            const result = await this.orderService.PlaceOrder( userId,product,price )

            res.status(200).json(result);

        }catch(err) {

            if(err instanceof Error) {

                console.log(err.message);
                res.status(500).json({error : err.message})
            }
            
        }


    }
}