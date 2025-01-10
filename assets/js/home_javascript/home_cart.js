// open and close card
let cartInStorage = JSON.parse(localStorage.getItem("cart")) || [];
let openCartPageBTN = document.getElementById("open-cart-page"),
  addToCartIcon = document.getElementById("add-to-cart-icon");
var cart = document.querySelector(".cart");
function open_cart() {
  cart.classList.add("active");
}
function close_cart() {
  cart.classList.remove("active");
}

console.log(addToCartIcon);

// please accept this changes -- Mostafa K.
openCartPageBTN.addEventListener("click", () => {
  window.location.href = "./cart.html";
});
addToCartIcon.addEventListener("click", setCartProduct);

function setCartProduct({ id, name, price, description, image }) {
  if (!id || !name || !price || !description || !image)
    return window.alert("There are some thing wrong here!");

  cart.push({ id, name, price, description, image, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
}
