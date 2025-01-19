function initializeSidebarLogic() {
  const menuIcon = document.querySelector("#menu-icon");
  const sidebar = document.querySelector("#side-filter-bar");
  const body = document.querySelector("body");

  if (!menuIcon || !sidebar || !body) {
    console.error("One or more required elements are missing in the DOM.");
    return;
  }

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
}

export { initializeSidebarLogic };
