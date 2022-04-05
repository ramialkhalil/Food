const express = require("express");
const morgan = require("morgan");

const PORT = 8000;

express()
  .use(morgan("tiny"))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
