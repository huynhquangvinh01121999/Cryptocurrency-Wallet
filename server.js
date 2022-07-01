const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");

const app = express();
const server = require("http").createServer(app);

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
server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
