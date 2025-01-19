import { restaurants } from "../../data/data_structure.js";

function initializeFeedLogic() {
  const homeFeedContainer = document.querySelector("#home-feed-container");

  restaurants.forEach((restaurant) => {
    const homeFeedItem = document.createElement("div");
    homeFeedItem.classList.add("home-feed-item");

    homeFeedItem.innerHTML = `
    <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
    <div class="restaurant-id">${restaurant.id}</div>
    <div class="card-content">
      <div class="restaurant-header">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <p class="restaurant-rating">⭐ ${restaurant.rating}</p>
      </div>
      <p class="restaurant-cuisine">${restaurant.cuisine.join(", ")}</p>
      <p class="restaurant-location">${restaurant.location.address}, ${restaurant.location.city}, ${restaurant.location.state} - ${restaurant.location.zipCode}</p>
    </div>
  `;

    homeFeedContainer.appendChild(homeFeedItem);
  });

  homeFeedContainer.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest(".home-feed-item")) {
      const homeFeedItem = target.closest(".home-feed-item");
      const restaurantId = homeFeedItem.querySelector(".restaurant-id").textContent;
      localStorage.removeItem("selectedRestaurantId");
      localStorage.setItem("selectedRestaurantId", restaurantId);

      // const selectedRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId);
      // localStorage.setItem("selectedRestaurant", JSON.stringify(selectedRestaurant));

      window.location.href = "/screen/restaurant_details_screen.html";
    }
  });
}

export { initializeFeedLogic };