import rateLimit from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import redisClient from "../conf/redis";


export const rateLimiter = rateLimit({

    store: new RedisStore({
        sendCommand: (...args:string[]) => (redisClient as any).call(...args)
    }),

    windowMs:60*100,
    max:100,
    keyGenerator:( req ) => {
        return req.user || req.ip;
    },

    message:{
        success:false,
        message:"Too many requests, try again later"
    }
});

