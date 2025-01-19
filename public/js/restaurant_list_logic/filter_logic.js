function initializeFilterLogic() {
  const applyFiltersButton = document.getElementById("apply-filters");
  const ratingFilter = document.querySelectorAll('input[name="rating"]');
  const priceRange = document.querySelector("#price-range");
  const priceRangeValue = document.querySelector("#price-range-value");

  // Update price range display
  priceRange.addEventListener("input", () => {
    priceRangeValue.textContent = priceRange.value;
  });

  // Apply filters button logic
  applyFiltersButton.addEventListener("click", () => {
    const selectedCuisines = Array.from(
      document.querySelectorAll('#cuisine-filters input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    const price = priceRange.value;

    const selectedRating =
      Array.from(ratingFilter).find((radio) => radio.checked)?.value || "all";

    alert(
      `Filters applied:\nCuisine: ${selectedCuisines.length > 0 ? selectedCuisines.join(", ") : "All"
      }\nPrice: ${price}\nRating: ${selectedRating}`
    );

    const sidebar = document.querySelector("#side-filter-bar");
    sidebar.classList.remove("show");
  });

  // Dropdown filter toggle logic
  document.querySelectorAll(".filter-group").forEach((filterGroup) => {
    filterGroup.addEventListener("click", (event) => {
      const filterTitle = event.target.closest(".filter-group").querySelector("label");
      const dropdownIcon = filterTitle?.querySelector(".filter-group-icon");

      if (dropdownIcon) {
        const isOpen = filterTitle.nextElementSibling.style.display === "none";
        filterTitle.nextElementSibling.style.display = isOpen ? "block" : "none";
        dropdownIcon.textContent = isOpen ? "v" : "^";
      }
    });
  });
}

export { initializeFilterLogic };