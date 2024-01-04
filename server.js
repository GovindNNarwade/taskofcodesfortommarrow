const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const env = require("dotenv");
env.config({ path: "./config/.env" });
const cors = require("cors");
const db = require("./config/db");
db();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const routes = [
  "Admin_routes",
  "category_routes",
  "service_routes",
"ServicePriceOptions_routes"
  

  // Add other routes here
];

// middleware
// const passportuser = require("./middleware/middleware");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task for tomorrow ",
      version: "1.0.0",
      description: "A simple Express Library API",
    },

    servers: [
      {
        url: "",
        description: " Documentation",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs-taskfortomorrow", swaggerUI.serve, swaggerUI.setup(specs));



// // middleware
// app.use("/api/v1", Enquiry);

routes.forEach((route) => {
  const routeModule = require(`./routes/${route}`);
  app.use(`/api/v1`, routeModule);
});
app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT || 4000}`)
);
