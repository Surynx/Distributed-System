import express, { urlencoded } from "express"
import { connectDB } from "./confiq/connectDb";
import { route } from "./routes/user.route";
import startGrpcServer from "./grpc/server";
import { grpcHandler } from "./di/container";
import "dotenv/config"

const app = express();

app.use(express.json());

app.use("/",route);

connectDB();

startGrpcServer(grpcHandler);

app.listen(process.env.AUTH_PORT,()=>console.log(`Auth service running at ${process.env.AUTH_PORT}`));





