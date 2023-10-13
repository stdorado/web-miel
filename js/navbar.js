document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector("button[aria-controls='mobile-menu']");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", function () {
        const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
        mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
        mobileMenu.hidden = isExpanded;
      });
    }
  });