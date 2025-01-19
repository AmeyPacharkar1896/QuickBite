import { initializeSidebarLogic } from "./sidebar_logic.js";
import { initializeFilterLogic } from "./filter_logic.js";
import { initializeNavigationLogic } from "./navigation_logic.js";
import { initializeFeedLogic } from "./feed_logic.js";

// Initialize all modules on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initializeFilterLogic();
  initializeNavigationLogic();
  initializeSidebarLogic();
  initializeFeedLogic();
});
