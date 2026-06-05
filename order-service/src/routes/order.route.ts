import express from "express";
import { orderController } from "../di/container";

export const router = express.Router();

router.get("/",orderController.getAllOrder);
router.post("/place",orderController.PlaceOrder);


