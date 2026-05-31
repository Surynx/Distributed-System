import { Model } from "mongoose";
import { IUser } from "../models/user.model";

export default class UserService {

    private userModel;
    private publisher;

    constructor(userModel:Model<IUser>,publisher:any) {

        this.userModel = userModel;
        this.publisher = publisher;
    }

    addUser = async (email:string,name:string) => {

        if(!email || !name) {
            throw new Error("User-Sevice : Empty field");
        }

        let user = await this.userModel.create({ email,userName:name });

        if(user) {

            this.publisher({ email });
            console.log("User created in userDB");
            return { userId:user._id,mess:"From UserService : user created successfully !" }
        }
    }

    getUser = async (id:string) => {
    
        let user = await this.userModel.findById(id);

        return {mess:`Welcome ${user?.userName}`};  
    }

    getUserDetails = async ( id:string ) => {

        let user = await this.userModel.findById(id);

        return { userName:user?.userName,email:user?.email };
    }

}