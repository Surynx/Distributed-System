import mongoose from "mongoose";

export interface IUser {

    email:string;
    password:string;
    userId:string;
    lastLoginAt:Date;
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userId: { type:String, required:true, unique:true},
  lastLoginAt: { type:Date,default:null }
});

export const userModel = mongoose.model<IUser>("User", userSchema);