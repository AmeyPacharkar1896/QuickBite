import { initializeNavigationLogic } from "../restaurant_list_logic/navigation_logic.js";
import { loadSelectedRestaurant } from "./load_selected_restaurants.js";

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigationLogic();
  loadSelectedRestaurant();
});
