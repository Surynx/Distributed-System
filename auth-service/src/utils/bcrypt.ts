import { compare, genSalt, hash } from "bcrypt"

export default class HashService {

    async hashPassword( password: string ) {

        let salt = await genSalt(10);

        let hasedPassword = await hash(password,salt);

        return hasedPassword;
    }

    async verify( password:string,hash:string ) {
        
        let valid = await compare(password,hash);
        return valid;
    }
}