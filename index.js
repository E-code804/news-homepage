document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("close");
  const overlay = document.getElementById("overlay");
  const mobileNavLinks = document.getElementById("mobile-nav-links");
  const breakpoint = 1024;

  // Function to remove the 'show' classes based on screen size
  const checkScreenSize = () => {
    if (window.innerWidth >= breakpoint) {
      hamburgerMenu.classList.remove("active");
      mobileNavLinks.classList.remove("show");
      overlay.classList.remove("show");
    }
  };

  // Initial check on page load
  checkScreenSize();

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    mobileNavLinks.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  // Close the menu and overlay when clicking the overlay
  overlay.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    mobileNavLinks.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Listen for window resize events
  window.addEventListener("resize", checkScreenSize);
});
