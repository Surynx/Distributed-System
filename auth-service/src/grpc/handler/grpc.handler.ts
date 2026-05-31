import grpc , { ServerUnaryCall,sendUnaryData } from "@grpc/grpc-js"

export default class GrpcHandler {

    private authService;

    constructor( authService : any ) {
        this.authService = authService;
    }

    getLoginInfo = async ( call:ServerUnaryCall<any , any>,callback:sendUnaryData<any> ) => {

        try {

            const { userId } = call.request;

            const loginInfo = await this.authService.getLoginInfo( String(userId) );

            return callback(null,loginInfo);

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