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
  // rating by stars
  const stars = document.querySelectorAll(".fa-star");
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      var starId = Number(star.id);
      for (let i = 0; i < starId; i++) {
        stars[i].classList.add("checked");
      }
      console.log(starId);
      for (let i = 4; i >= starId; i--) {
        stars[i].classList.remove("checked");
      }
    });
  });
  // get product Details from local Storge
  function getCartProducts() {
    let productInLocalStorage = JSON.parse(
      localStorage.getItem("productDetails")
    );
    return productInLocalStorage[0];
  }
  // display product details in product
  function displayProductDetails(details) {
    let image = document.querySelector(".main-image");
    let name = document.querySelector(".product-name");
    let price = document.querySelector(".product-price");
    let description = document.querySelector(".product-description");
    image.innerHTML = `<img src="${details.image}" alt="${details.name}" />`;
    name.textContent = details.name;
    price.textContent = details.price;
    description.textContent = details.description;
  }

  let productDetails = getCartProducts();
  console.log(productDetails);
  displayProductDetails(productDetails);
});
