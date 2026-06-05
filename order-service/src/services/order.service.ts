import { PrismaClient } from "../generated/prisma/client";

export default class OrderService {
    
  private prismaClient : PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  getAllOrder = async ( userId: string ) => {

    if(!userId) {
     throw new Error("Invalid User"); 
    }

    let orders = await this.prismaClient.order.findMany({
      where:{
        userId:userId
      }
    });

    return { totalOrderPlaced:orders.length,Orders:orders }
  }

  PlaceOrder = async (userId: string, product: string, price: number) => {

    if (!userId || !product || !price) {
      throw new Error("All fields are required !!");
    }

    let order = await this.prismaClient.order.create({
      data: {
        userId,
        product,
        price,
      },
    });

    return { mess: "Order created Successfully !", order }

  };
}
