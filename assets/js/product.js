document.addEventListener("DOMContentLoaded", () => {
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
    let thumbnailone = document.querySelectorAll(".thumbnail-images img");
    let name = document.querySelector(".product-name");
    let price = document.querySelector(".product-price");
    let description = document.querySelector(".product-description");
    image.innerHTML = `<img src="${details.image}" alt="${details.name}" />`;
    thumbnailone[0].src = details.image;
    name.textContent = details.name;
    price.textContent = details.price;
    description.textContent = details.description;
  }
  let productDetails = getCartProducts();
  displayProductDetails(productDetails);

  // Add product to cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function setCartProduct({ id, name, price, description, image }) {
    if (!id || !name || !price || !description || !image)
      return window.alert("There are some thing wrong here!");

    const isProductInCart = cart.some(
      (addToCartButton) => addToCartButton.id === id
    );

    if (isProductInCart) {
      window.location.href = `cart.html`;
      return window.alert("This product is already in the cart!");
    }
    // get quntity of product
    let product_quantity = document.querySelector("#quantity").value;
    cart.push({ id, name, price, description, image, qty: product_quantity });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // Get the add to cart button and add an event listener
  var addToCartButton = document.querySelector(".cart-button");
  addToCartButton.onclick = function () {
    setCartProduct({
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.price,
      description: productDetails.description,
      image: productDetails.image,
    });
    window.location.href = `cart.html`;
  };

  // Update the main image when a thumbnail is clicked
  const thumbnails = document.querySelectorAll(".thumbnail-images img");
  const mainImage = document.querySelector(".main-image img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      mainImage.src = thumbnail.src;
    });
  });
});
