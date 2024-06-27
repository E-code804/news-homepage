document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobile-nav-links").classList.add("show");
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("mobile-nav-links").classList.remove("show");
});
