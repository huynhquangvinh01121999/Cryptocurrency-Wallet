const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./src/Routers/routers");

const app = express();

// Add swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swagger");

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// USE CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// register routers
routers(app);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}/swagger-ui`);
});
