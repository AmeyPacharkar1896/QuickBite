function initializeNavigationLogic() {
  const navBar = document.getElementById("navigation-bar");
  navBar.innerHTML = `
      <div id="first-half">
        <div>
          <div id="menu-icon"></div>
          <div id="logo-name"></div>
        </div>
        <div id="user-space">
          <div>Sign Up</div>
          <div>Sign In</div>
        </div>
      </div>
    `;

  const logoName = document.querySelector("#logo-name");

  logoName.addEventListener("click", () => {
    window.location.href = "./restaurant_list_screen.html";
  });
}

export { initializeNavigationLogic };

{/* <nav>
    <div id="first-half">
      <div>
        <div id="menu-icon"></div>
        <div id="logo-name"></div>
      </div>
      <div id="user-space">
        <div>Sign Up</div>
        <div>Sign In</div>
      </div>
    </div>
    <div id="search-bar">
      <input type="search" name="restaurant-searchbar" id="restaurant-searchbar" placeholder="Search Restaurant" />
    </div>
  </nav> */}