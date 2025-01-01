// assets/js/footer.js

document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
        <footer class="footer">
            <div class="container">
                <p>&copy; <span class="footer-year"></span> E-Commerce. All rights reserved.</p>
            </div>
        </footer>
    `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);

  const yearElement = document.querySelector(".footer-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
