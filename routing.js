const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/restaurant-list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'restaurant_list.html'));
});

app.get('/restaurant/:id', (req, res) => {
  // Here you would typically query your database or data source
  // to retrieve information based on the `:id` parameter
  res.sendFile(path.join(__dirname, 'views', 'restaurant_details.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
