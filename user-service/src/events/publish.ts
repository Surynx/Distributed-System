import amqp from "amqplib";

export const publishUserCreated = async (data:{ email:string }) => {

    let queue = "user_created";

    const connection = await amqp.connect("amqp://rabbitmq:5672");

    const channel = await connection.createChannel();

    await channel.assertQueue(queue);

    channel.sendToQueue(queue,Buffer.from(JSON.stringify(data)));

    console.log("Message published to Notification service");
}