document.addEventListener("DOMContentLoaded", () => {
  // Update the main image when a thumbnail is clicked
  const thumbnails = document.querySelectorAll(".thumbnail-images img");
  const mainImage = document.querySelector(".main-image img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      mainImage.src = thumbnail.src;
    });
  });

  // Handle quantity increment and decrement
  const decrementButton = document.querySelector(
    ".quantity button:first-child"
  );
  const incrementButton = document.querySelector(".quantity button:last-child");
  const quantityInput = document.querySelector(".quantity input");

  decrementButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value, 10);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  });

  incrementButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value, 10);
    quantityInput.value = quantity + 1;
  });

  // Validate input for quantity
  quantityInput.addEventListener("input", () => {
    let quantity = parseInt(quantityInput.value, 10);
    if (isNaN(quantity) || quantity < 1) {
      quantityInput.value = 1;
    }
  });
});
