const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const {
  getReceipes,
  getIngredients,
  getLocations,
  getRestaurants,
  getRestaurant,
  checkUser,
  addUser,
  addRestaurantToUser,
  removeRestaurantFromUser,
  getUser,
} = require("./handlers");

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

  .patch("/api/check-user", checkUser)
  .patch("/api/add-user", addUser)
  .patch("/api/get-user", getUser)
  .patch("/api/addRestaurantToUser", addRestaurantToUser)
  .patch("/api/removeRestaurantFromUser", removeRestaurantFromUser)

  .patch("/api/get-receipes/:ingredient", getReceipes)
  .get("/api/get-ingredients/:ingredient", getIngredients)

  .get("/api/get-locations/:location", getLocations)
  .get("/api/get-restaurants/:locationId", getRestaurants)
  .get("/api/get-restaurant-details/:locationId", getRestaurant)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
