// open and close card

let openCartPageBTN = document.getElementById("open-cart-page");

var cart = document.querySelector(".cart");
function open_cart() {
  cart.classList.add("active");
}
function close_cart() {
  cart.classList.remove("active");
} 

// please accept this changes -- Mostafa K.
openCartPageBTN.addEventListener("click", () => {
  window.location.href = "./cart.html";
});


