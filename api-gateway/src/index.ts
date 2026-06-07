import express from "express";
import { router } from "./routes/route";
import { CONFIG } from "./conf/env";
import { rateLimiter } from "./middleware/rateLimiter";
import logger from "./conf/morgan";

const app = express();

app.use(logger);

app.use(rateLimiter);

app.use("/",router);

app.listen(CONFIG.PORT,()=>console.log(`Gateway running at ${CONFIG.PORT}...✅`));