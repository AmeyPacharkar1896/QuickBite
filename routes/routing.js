const express = require('express');
const router = express.Router();
const path = require('path');

// Define routes for views
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html')); // Serve index.html
});

router.get('/restaurant-list', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'restaurant_list_screen.html')); // Serve restaurant_list_screen.html
});

router.get('/:restaurantName/:restaurantId', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'restaurant_details_screen.html')); // Serve restaurant_details.html
});

router.get('/registration-screen', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'sign-up-sign-in-screen.html'));
})

module.exports = router;