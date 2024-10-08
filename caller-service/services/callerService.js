// services/callerService.js
const axios = require("axios");
const amqp = require("amqplib/callback_api");

async function sendRequests() {
  setInterval(async () => {
    const endpoints = [
      "/wallets",
      "/wallets/random_address",
      "/wallets/top-tokens",
    ];
    const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

    try {
      const res = await axios.get(`http://localhost:3000${endpoint}`);
      console.log(
        `Status: ${res.status}, Response Time: ${res.headers["x-response-time"]}`
      );
    } catch (error) {
      console.log("Error:", error.message);
    }
  }, 1200); // 50 requests per minute
}
