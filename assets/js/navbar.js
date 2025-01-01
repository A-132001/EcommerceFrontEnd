// assets/js/navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
        <header class="navbar">
            <div class="container">
                <a href="index.html" class="navbar-logo">Welcome to our website!</a>
                <button class="navbar-toggle" aria-label="Toggle navigation">
                    <span class="navbar-icon"></span>
                </button>
                <nav class="navbar-menu">
                    <a href="index.html">Home</a>
                    <a href="all-products.html">Products</a>
                    <a href="cart.html">Cart</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </header>
    `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
  });

  document.querySelectorAll(".navbar-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
    });
  });
});
