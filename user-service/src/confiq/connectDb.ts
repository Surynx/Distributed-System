import mongoose from "mongoose";
import "dotenv/config"

export const connectDB = async () => {
  try {

    await mongoose.connect(`${process.env.USER_MONGO_URL}`);
    console.log("connected to userDB");

  } catch (error) { 

    console.error("MongoDB connection Error : "+error);
  }
};