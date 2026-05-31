import { ServerUnaryCall,sendUnaryData } from "@grpc/grpc-js"
import * as grpc from "@grpc/grpc-js";

export default class GrpcHandler {

    private userService;

    constructor( userService : any ) {
        this.userService = userService;
    }

    getUserDetails = async ( call:ServerUnaryCall<any , any>,callback:sendUnaryData<any> ) => {

        try {

            const { userId } = call.request;

            const userData = await this.userService.getUserDetails(String(userId));

            return callback(null,userData);

        }catch(err) {

            if(err instanceof Error) {

                return callback({
                    code:grpc.status.INTERNAL,
                    message:err.message
                });

            }
        }
    }
}