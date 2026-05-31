import mongoose from "mongoose";


export const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://sooryanarayanantr_db_user:Eq9rCOopjJu8gOuo@cluster0.ksovhvv.mongodb.net/auth-db?appName=Cluster0");
    console.log("connected to authDB");

  } catch (error) { 

    console.error("MongoDB connection Error : "+error);
  }
};