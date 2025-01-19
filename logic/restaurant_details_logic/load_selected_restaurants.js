import { restaurants } from '../../data/data_structure.js';

// Load restaurant details based on the selected restaurant ID
function loadSelectedRestaurant() {
  const selectedRestaurantId = localStorage.getItem("selectedRestaurantId");
  console.log(selectedRestaurantId);
  if (!selectedRestaurantId) {
    console.error("No selected restaurant ID found in localStorage.");
    return;
  }

  // Find the restaurant by ID
  const restaurant = restaurants.find(rest => rest.id == selectedRestaurantId);
  if (!restaurant) {
    console.error("Restaurant not found.");
    return;
  }

  // Populate the restaurant details on the page
  const infoContainer = document.getElementById("info-container");
  const restaurantHTML = `
    <div id="restaurant-info">
      <div id="restaurant-name">${restaurant.name}</div>
      <div id="tags">${restaurant.cuisine.join(", ")}</div>
      <div id="restaurant-details">
        <span id="address">${restaurant.location.address}, ${restaurant.location.city}</span>
        <span id="contact">${restaurant.contact.phone}</span>
        <span id="rating">⭐ ${restaurant.rating}</span>
      </div>
    </div>
    <div id="menu-item-containers">
      <h2>Featured Dishes</h2>
      ${restaurant.dishes.map(dish => `
        <div class="menu-item" data-id="${dish.id}">
          <div class="item-details">
            <div class="item-name">${dish.name}</div>
            <div class="ingredients">${dish.description}</div>
            <div class="price">₹${dish.price}</div>
          </div>
          <div class="item-image">
            <img src="${dish.image}" alt="${dish.name}">
          </div>
          <div class="action">
            <div class="add-item">+</div>
            <div class="remove-item">-</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  infoContainer.innerHTML = restaurantHTML;

  // Initialize event listeners for menu items
  addMenuItemListeners();
}

// Add event listeners to menu items
function addMenuItemListeners() {
  document.querySelectorAll('.add-item').forEach(button => {
    button.addEventListener('click', function () {
      const menuItem = this.closest('.menu-item');
      const itemName = menuItem.querySelector('.item-name').textContent;
      const itemImage = menuItem.querySelector('.item-image img').src;
      const ingredients = menuItem.querySelector('.ingredients').textContent;
      const price = menuItem.querySelector('.price').textContent;

      // Populate the bottom sheet with item details
      document.getElementById('bottom-sheet-item-image').src = itemImage;
      document.getElementById('bottom-sheet-item-name').textContent = itemName;
      document.getElementById('bottom-sheet-description').textContent = ingredients;
      document.getElementById('bottom-sheet-price').textContent = `₹${price}`;

      // Show the bottom sheet
      const bottomSheet = document.getElementById('bottom-sheet');
      bottomSheet.style.display = 'block';

      // Handle quantity and add to cart logic
      handleBottomSheetActions(price);
    });
  });
}

// Logic for bottom sheet actions
function handleBottomSheetActions(price) {
  let quantity = 1;
  const quantityElement = document.getElementById('quantity');
  const increaseQuantityButton = document.getElementById('increase-quantity');
  const submitButton = document.getElementById('submit-button');

  increaseQuantityButton.onclick = () => {
    quantity++;
    quantityElement.textContent = quantity;
  };

  submitButton.onclick = () => {
    const totalPrice = quantity * parseInt(price, 10);
    console.log(`Item added to cart. Quantity: ${quantity}, Total Price: ₹${totalPrice}`);

    // Close the bottom sheet
    document.getElementById('bottom-sheet').style.display = 'none';
  };
}

export { loadSelectedRestaurant };
