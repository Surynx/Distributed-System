import { Request, Response } from "express";

export default class ProfileController {

    private profileService

    constructor( profileService:any ) {
        this.profileService = profileService
    } 

    getUserProfile = async ( req:Request,res:Response ) => {

        let id = req.headers["x-user-id"];

        const userDetail = await this.profileService.getUserProfile(id);

        res.status(200).json(userDetail);
    }

}