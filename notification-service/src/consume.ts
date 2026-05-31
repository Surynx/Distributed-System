import amqp from "amqplib";

const consumeMessage = async () => {

    let queue = "user_created";

    const connection = await amqp.connect("amqp://rabbitmq:5672");
    const channel = await connection.createChannel();

    await channel.assertQueue(queue); 

    console.log("📥 Waiting for messages...");

    channel.consume(queue,(msg)=>{

        if(msg) {

            const data = JSON.parse(msg.content.toString());

            console.log("📨 Received:", data);
            
            console.log(`Send welcome email to ${data.email}`);

            channel.ack(msg);
        }
    })
}

consumeMessage();
