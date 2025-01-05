document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down: hide the header
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up: show the header
      header.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY; // Update the last scroll position
  });
});
