const logoName = document.querySelector("#logo-name");
const menuIcon = document.querySelector("#menu-icon");
const sidebar = document.querySelector("#side-filter-bar");
const body = document.querySelector("body");

logoName.addEventListener("click", () => {
  window.location.href = "././restaurant_list_screen.html"
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("side-filter-bar");
  const body = document.body;

  const applyFiltersButton = document.getElementById("apply-filters");
  const ratingFilter = document.getElementById("rating-filter");
  const ratingValue = document.getElementById("rating-value");

  // Handle menu icon click to toggle sidebar
  menuIcon.addEventListener("click", (event) => {
    console.log("Show sidebar");
    event.stopPropagation();
    sidebar.classList.toggle("show");
  });

  // Close sidebar when clicking outside
  body.addEventListener("click", (event) => {
    if (
      sidebar.classList.contains("show") &&
      !sidebar.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      sidebar.classList.remove("show");
    }
  });

  sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Update rating value display in real-time
  ratingFilter.addEventListener("input", (event) => {
    ratingValue.textContent = event.target.value;
  });

  // Apply filters and log selected options
  applyFiltersButton.addEventListener("click", () => {
    // Get selected cuisines
    const selectedCuisines = Array.from(
      document.querySelectorAll('#cuisine-filter .dropdown-menu input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    // Get selected price range
    const price = document.querySelector('input[name="price"]:checked')?.value || "all";

    // Get selected rating
    const rating = ratingFilter.value;

    console.log("Filters Applied:");
    console.log("Cuisine:", selectedCuisines.length > 0 ? selectedCuisines : "all");
    console.log("Price Range:", price);
    console.log("Minimum Rating:", rating);

    alert(
      `Filters applied:\nCuisine: ${selectedCuisines.length > 0 ? selectedCuisines.join(", ") : "All"}\nPrice: ${price}\nRating: ${rating}`
    );

    // Close the sidebar after applying filters
    sidebar.classList.remove("show");
  });
});


document.getElementById("cuisine-filter").addEventListener("click", function (e) {
  this.classList.toggle("open");
});