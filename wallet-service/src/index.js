const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const walletRoutes = require("./controllers/wallet.controller");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Wallet Service API",
      version: "1.0.0",
    },
  },
  apis: ["./src/controllers/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", walletRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Wallet Service running on port 3000"));
});
