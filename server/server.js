const express = require('express');
require('dotenv').config();
const cors = require('cors');

const connectDB = require('./config/db.js');
const restaurantRoute = require('./routes/restaurants.js');
const orderRoute = require('./routes/orders.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Enable CORS before routes are added
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true,
}));

// Mount routes
app.use('/api/restaurants', restaurantRoute);
app.use('/api/orders', orderRoute);

// Start the server after connecting to the database
(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
})();
