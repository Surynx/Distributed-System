import mongoose from "mongoose";

export interface IUser {
  userName:string;
  email:string;
}

const userSchema = new mongoose.Schema<IUser>({
  userName: { type:String, required:true },
  email: { type: String, required: true, unique: true }
});

export const userModel = mongoose.model<IUser>("User", userSchema);