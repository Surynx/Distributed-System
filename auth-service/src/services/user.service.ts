import { Model } from "mongoose";
import { IUser } from "../models/user.model";
import axios, { AxiosResponse } from "axios";
import "dotenv/config"

export default class AuthService {

  private userModel;
  private tokenService;
  private hashService;


  constructor(userModel:Model<IUser> ,tokenService:any,hashService:any ) {

    this.userModel = userModel;
    this.tokenService = tokenService;
    this.hashService = hashService;
  }

  registerUser = async(email: string, name:string, password: string) => {

    if (!email || !password || !name) {
      throw new Error("Invalid Input Field");
    }

    let { userId,mess } = await this.createUserProfile(email,name)

    console.log(mess);

    let hashedPass = this.hashService.hashPassword(password);

    let user = await this.userModel.create({
      email,
      password : hashedPass,
      userId
    });

    console.log("User created in authDB");

    return user;
  }

  loginUser = async (email: string, password: string) => {

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new Error("Please Register Your Account");
    }

    const isMatch = this.hashService.verify(password,user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    user.lastLoginAt = new Date();
    await user.save();

    const token = this.tokenService.generateToken(user.userId.toString());

    return {
      mess: "Login success !!",
      token,
    };
  };

  createUserProfile = async (email:string,name:string) => {

    try{

      let res:AxiosResponse = await axios.post(process.env.USER_SERVICE_URL!,{ email,name },{
        headers:{
          "x-service-key":"secret@123"
        }
      });

      return res.data.response;

    }catch(err){

      if(err instanceof Error) console.log(err.message);
    }
  }

  getLoginInfo = async ( id:string ) => {

    const authInfo = await this.userModel.findOne({ userId:id });

    return { lastLoginAt:authInfo?.lastLoginAt };
  }
}
