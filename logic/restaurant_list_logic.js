const logoName = document.querySelector("#logo-name");
const menuIcon = document.querySelector("#menu-icon");
const sidebar = document.querySelector("#side-filter-bar");
const body = document.querySelector("body");

logoName.addEventListener("click", () => {
  window.location.href = "././restaurant_list_screen.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const applyFiltersButton = document.getElementById("apply-filters");
  const ratingFilter = document.querySelectorAll('input[name="rating"]');
  const priceRange = document.querySelector("#price-range");
  const priceRangeValue = document.querySelector("#price-range-value");

  menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.toggle("show");
  });

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

  priceRange.addEventListener("input", () => {
    priceRangeValue.textContent = priceRange.value;
  });

  applyFiltersButton.addEventListener("click", () => {
    const selectedCuisines = Array.from(
      document.querySelectorAll('#cuisine-filters input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    const price = priceRange.value;

    const selectedRating = Array.from(ratingFilter).find(radio => radio.checked)?.value || "all";

    alert(
      `Filters applied:\nCuisine: ${selectedCuisines.length > 0 ? selectedCuisines.join(", ") : "All"}\nPrice: ${price}\nRating: ${selectedRating}`
    );

    sidebar.classList.remove("show");
  });
});

document.querySelectorAll('.filter-group').forEach((filterGroup) => {
  filterGroup.addEventListener('click', function (e) {
    const filterTitle = e.target.closest('.filter-group').querySelector('label');
    const dropdownIcon = filterTitle?.querySelector('.filter-group-icon');

    if (dropdownIcon) {
      const isOpen = filterTitle.nextElementSibling.style.display === "none";
      filterTitle.nextElementSibling.style.display = isOpen ? "block" : "none";
      dropdownIcon.textContent = isOpen ? "v" : "^";
    }
  });
});

const homeFeedContainer = document.querySelector("#home-feed-container");
homeFeedContainer.addEventListener("click", (event) => {
  const target = event.target;

  if(target.closest(".home-feed-item")) {
    window.location.href = "/screen/restaurant_details_screen.html";
  }
});