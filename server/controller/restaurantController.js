const Restaurant = require("../model/Restaurant.js");
const MenuItem = require("../model/MenuItem.js");
const mongoose = require("mongoose");

// Get All Restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error.message);
    res.status(500).json({ message: `Error fetching restaurants: ${error.message}` });
  }
};

// Get Menu Items for a Specific Restaurant
const getRestaurantMenu = async (req, res) => {
  try {
    const { id } = req.params;
    // Cast the id to an ObjectId for proper matching
    const restaurantId = new mongoose.Types.ObjectId(id);
    const menuItems = await MenuItem.find({ restaurant: restaurantId });
    res.status(200).json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error.message);
    res.status(500).json({ message: `Error fetching menu items: ${error.message}` });
  }
};

module.exports = { getAllRestaurants, getRestaurantMenu };
