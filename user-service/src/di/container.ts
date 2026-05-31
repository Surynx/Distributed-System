import UserController from "../controllers/user.controller";
import { publishUserCreated } from "../events/publish";
import GrpcHandler from "../grpc/handler/grpc.handler";
import { userModel } from "../models/user.model";
import UserService from "../services/user.service";


const userService = new UserService(userModel,publishUserCreated);

//http
const userController = new UserController(userService);

//grpc
const grpcHandler = new GrpcHandler(userService);

export { userController,grpcHandler }