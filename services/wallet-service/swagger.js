import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Basic Swagger Setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // OpenAPI version
    info: {
      title: "Wallet Service API", // Title of the API
      version: "1.0.0", // API Version
      description: "API for managing wallet data and analysis", // Short description
    },
    servers: [
      {
        url: "http://localhost:3000", // The URL where the API runs
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Indicates that you are using JSON Web Tokens
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Apply bearer token to all endpoints globally
      },
    ],
  },
  apis: ["./services/wallet-service/routes/*.js"], // Path to API docs
};

// Initialize Swagger docs
const swaggerSpecs = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app) => {
  // Serve swagger UI at /api-docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
};

export default setupSwagger;
