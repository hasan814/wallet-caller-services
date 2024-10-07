const amqp = require("amqplib");
const cron = require("node-cron");
const winston = require("winston");
require("dotenv").config();

async function sendRequest() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue("wallet_requests");

  cron.schedule("* * * * *", async () => {
    for (let i = 0; i < 50; i++) {
      const message = { endpoint: "/wallets", payload: {} };
      channel.sendToQueue(
        "wallet_requests",
        Buffer.from(JSON.stringify(message))
      );
      winston.info("Sent 50 requests");
    }
  });
}

module.exports = { sendRequest };
