const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { sendRequest } = require('./services/caller.service');
require('dotenv').config();

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Caller Service API',
      version: '1.0.0',
    },
  },
  apis: ['./src/services/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

sendRequest();

app.listen(3001, () => console.log('Caller Service running on port 3001'));
