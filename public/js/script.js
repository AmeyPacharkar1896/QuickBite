const pincodeSearchButton = document.querySelector("#pincode-search-button");
const registration = document.querySelector(".registration");

pincodeSearchButton.addEventListener("click", () => {
  // This will route to the correct page
  window.location.href = "/restaurant-list"; // No need to specify views, Express will handle it
});

registration.addEventListener("click", () => {
  window.location.href = "/registration-screen";
})