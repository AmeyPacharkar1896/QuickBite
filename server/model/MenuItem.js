const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },         // URL for the menu item's image
  category: { type: String },           // e.g., 'Appetizer', 'Main Course', 'Dessert'
  isAvailable: { type: Boolean, default: true }, // Availability status
  rating: { type: Number, default: 0 }, // Average rating (optional)
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
