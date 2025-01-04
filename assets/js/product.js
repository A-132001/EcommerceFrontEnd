function toggleFavorite() {
  const starIcon = document.querySelector(".star-icon");
  starIcon.classList.toggle("active");
}

function rateProduct(rating) {
  const stars = document.querySelectorAll(".stars .star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
  alert(`You rated this product ${rating} star(s). Thank you!`);
}

document.querySelector(".add-to-cart").addEventListener("click", function () {
  alert("Product added to cart!");
});
