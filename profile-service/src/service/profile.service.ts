export default class ProfileService {

    private userClient;
    private authClient;

    constructor( userClient:any,authClient:any ) {
        this.userClient = userClient;
        this.authClient = authClient;
    }

    getUserProfile = async ( id:string ) => {

        const userDetail = await this.getUserDetail(id);
        const loginInfo = await this.getLoginInfo(id);
        
        return { userDetail,loginInfo };
    }

    getUserDetail = async ( id:string ) => {

        return new Promise((resolve,rej)=>{

            this.userClient.GetUserDetail({ userId:id },
            ( err:any,res:any )=>{

                if(err) {
                    console.log(err);
                    return rej(err);
                }

                resolve(res);
            })
        })
    }

    getLoginInfo = async ( id:string ) => {

        return new Promise((resolve,rej)=>{

            this.authClient.GetLoginInfo({ userId:id },
            ( err:any,res:any )=>{

                if(err) {
                    console.log(err);
                    return rej(err);
                }

                resolve(res);
            })
        })
    }
}