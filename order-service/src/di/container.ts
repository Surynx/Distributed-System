import prisma from "../conf/prisma";
import OrderController from "../controller/order.controller";
import OrderService from "../services/order.service";


const orderService = new OrderService(prisma);
const orderController = new OrderController(orderService);

export { orderController }