// utils/rabbitMQ.js
const amqp = require("amqplib/callback_api");

function connectToRabbitMQ() {
  amqp.connect("amqp://localhost", (err, connection) => {
    if (err) throw err;
    connection.createChannel((err, channel) => {
      if (err) throw err;
      const queue = "wallet_queue";

      channel.assertQueue(queue, {
        durable: false,
      });

      console.log("Waiting for messages in %s", queue);

      channel.consume(
        queue,
        (msg) => {
          console.log("Received %s", msg.content.toString());
          // Process message...
        },
        {
          noAck: true,
        }
      );
    });
  });
}

module.exports = connectToRabbitMQ;
