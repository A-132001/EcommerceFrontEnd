function loadComponent(selector, file) {
  fetch(`components/${file}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${file}: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch((error) => console.error(error));
}

// Load Navbar and Footer
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "navbar.html");
  loadComponent("footer", "footer.html");
});
