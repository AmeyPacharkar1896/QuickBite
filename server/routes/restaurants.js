// routes/restaurants.js
const express = require("express");
const router = express.Router();
const { getAllRestaurants, getRestaurantMenu } = require("../controller/restaurantController.js");

// Group routes for "/restaurants"
router.route("/")
  .get(getAllRestaurants);

// Group routes for "/restaurants/:id/menu"
router.route("/:id/menu")
  .get(getRestaurantMenu);

module.exports = router;
