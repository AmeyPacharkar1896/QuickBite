// routes/orders.js
const express = require("express");
const router = express.Router();
const { createOrder } = require("../controller/orderController.js");

// Group routes for "/orders"
router.route("/")
  .post(createOrder);

module.exports = router;
