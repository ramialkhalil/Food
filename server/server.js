const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const { getReceipes } = require("./handlers");

const PORT = 8000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(helmet())
  .use(cors())
  .use(express.json())

  // End points

  .get("/api/get-receipe/:ingredient", getReceipes)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
