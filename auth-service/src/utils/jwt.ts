import jwt from "jsonwebtoken";

export default class TokenService {

    generateToken( id:string ){

        return jwt.sign({ id:id },"secretkey",{expiresIn:"1d"});
    }
}