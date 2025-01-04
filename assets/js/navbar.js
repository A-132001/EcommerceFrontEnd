// open and close card

var cart = document.querySelector(".cart");
function open_cart() {
  window.location.href = '/cart.html'
  cart.classList.add("active");
}
function close_cart() {
  cart.classList.remove("active");
}
