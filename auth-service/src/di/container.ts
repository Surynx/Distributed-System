import AuthController from "../controllers/user.controller";
import GrpcHandler from "../grpc/handler/grpc.handler";
import { userModel } from "../models/user.model";
import AuthService from "../services/user.service";
import TokenService from "../utils/jwt";


const authService = new AuthService(userModel,new TokenService());

//http
const authController = new AuthController(authService);

//grpc
const grpcHandler = new GrpcHandler(authService);

export { authController,grpcHandler };