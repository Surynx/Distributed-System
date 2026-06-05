import express from "express"
import { verifyService } from "./middleware/verifyService";
import "dotenv/config"
import { router } from "./routes/order.route";

const app = express();

app.use(express.json());

app.use("/",router);

app.listen(process.env.ORDER_PORT,()=>console.log(`Order service running at ${process.env.ORDER_PORT}`));





