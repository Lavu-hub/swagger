// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Node.js API",
      version: "1.0.0",
      description: "API documentation using Swagger (OpenAPI 3.0)",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },

  // Path to the API docs (your routes with Swagger comments)
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
