const Order = require("../model/Order.js");
const MenuItem = require("../model/MenuItem.js");

// Create Order
const createOrder = async (req, res) => {
  try {
    const { restaurant, items } = req.body;
    if (!restaurant || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    // Calculate total price based on items and their quantities
    let total = 0;
    for (const item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (!menuItem) {
        return res.status(400).json({ message: `Menu item ${item.menuItem} not found` });
      }
      total += menuItem.price * item.quantity;
    }

    const order = new Order({ restaurant, items, total });
    const createdOrder = await order.save();
    if (!createdOrder) throw new Error("Failed to create order");
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(400).json({ message: `Error creating order: ${error.message}` });
  }
};

module.exports = { createOrder };
