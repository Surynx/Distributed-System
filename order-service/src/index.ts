import express from "express"
import prisma from "./conf/prisma";
import { verifyService } from "./middleware/verifyService";
import "dotenv/config"

const app = express();

app.use(express.json());

app.post("/",verifyService, async ( req,res )=>{

    const { product,price } = req.body;
    let userId = req.headers["x-user-id"];
    userId = String(userId);

    if( !userId || !product || !price) {
        return res.status(400).json({ status:"All fields are required !!" });
    }

    let order = await prisma.order.create({
        data:{
            userId,
            product,
            price
        }
    });

    res.status(200).json({mess:"Order created Successfully !",order})
})



app.listen(process.env.ORDER_PORT,()=>console.log(`Order service running at ${process.env.PORT}`));





