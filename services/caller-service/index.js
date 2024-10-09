import axios from "axios";
import cron from "node-cron";
import winston from "winston";

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

const callWalletService = async () => {
  try {
    const response = await axios.get("http://localhost:3000/wallets");
    logger.info(`Request successful, response time: ${response.elapsedTime}ms`);
  } catch (error) {
    logger.error("Error in Wallet Service request", error);
  }
};

cron.schedule("*/1 * * * *", () => {
  logger.info("Caller Service: Sending requests to Wallet Service...");
  for (let i = 0; i < 50; i++) {
    callWalletService();
  }
});
