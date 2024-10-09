import express from "express";
import connectDB from "./database.js";
import dotenv from "dotenv";
import walletRoutes from "./routes/walletRoutes.js";
import setupSwagger from "./swagger.js"; // Import Swagger

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Use the wallet routes
app.use(walletRoutes);

// Setup Swagger documentation
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Wallet service running on port ${PORT}`);
});
