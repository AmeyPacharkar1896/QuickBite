const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    quantity: { type: Number, default: 1 }
  }],
  total: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'], 
    default: 'Pending' 
  },
  deliveryAddress: { type: String, required: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  paymentMethod: { 
    type: String, 
    enum: ['Cash', 'Credit Card', 'Digital Wallet'], 
    default: 'Cash' 
  },
  orderNotes: { type: String },
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Order', OrderSchema);
