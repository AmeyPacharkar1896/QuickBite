const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String }, // Brief description about the restaurant
  imageUrl: { type: String }, // URL for restaurant's image/banner
  rating: { type: Number, default: 0 }, // Average customer rating
  cuisine: { type: [String], default: [] }, // Array of cuisine types (e.g., Italian, Chinese)
  phone: { type: String }, // Contact phone number
  operatingHours: { // Operating hours for each day of the week
    monday: { open: String, close: String },
    tuesday: { open: String, close: String },
    wednesday: { open: String, close: String },
    thursday: { open: String, close: String },
    friday: { open: String, close: String },
    saturday: { open: String, close: String },
    sunday: { open: String, close: String },
  },
  priceRange: { type: String }, // Price range indicator (e.g., "$", "$$", "$$$")
  deliveryFee: { type: Number, default: 0 }, // Delivery fee in your local currency
  location: { // Geolocation for mapping (optional)
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" }, // [longitude, latitude]
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
