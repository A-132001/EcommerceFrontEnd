//variables
let cart = JSON.parse(localStorage.getItem("cart")) || [] ;
let cartContainer = document.getElementById("cart"),
  cartTable = document.getElementById("cart-table"),
  couponSection = document.getElementById("coupon-section"),
  totalPricesSection = document.getElementById("total-prices-section");

// Methods
function inc(event, id, p) {
  event.preventDefault();
  const input = event.target.parentElement.querySelector("input");
  let value = parseInt(input.value) || 0;
  input.value = value + 1;
  cart.forEach((product) => {
    if (product.id == id) {
      product.qty = ++value;
    }
  });
  document.getElementById(`subtotal-${id}`).innerText =
    "$" + (p * value).toFixed(2);
  getTotal(cart).toFixed(2);
  console.log(cart);
}
function dec(event, id, p) {
  event.preventDefault();
  const input = event.target.parentElement.querySelector("input");
  let value = parseInt(input.value) || 0;
  if (value > 1) {
    input.value = value - 1;
    cart.forEach((p) => {
      if (p.id == id) {
        p.qty = --value;
      }
    });
    document.getElementById(`subtotal-${id}`).innerText =
      "$" + (p * value).toFixed(2);
    getTotal(cart).toFixed(2);
  }
}

function removeProductFromCart(id) {
  if (!id) return alert("there are some thing wrong!");
  const index = cart.findIndex((prod) => prod.id == id);
  if (index !== -1) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
  document.getElementById(id).remove();
  if (cart.length === 0) {
    cartTable.innerHTML = `<h3>No products in your cart!</h3>`;
    couponSection.innerHTML = "";
    totalPricesSection.innerHTML = "";
    cartRow = "";
  }
}
function getTotal(userCart = []) {
  if (userCart.length === 0) return [];
  const total = userCart.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
  document.getElementById("total-invice-contaner").innerText =
    "$" + total.toFixed(2);
  return total;
}
function cartTableContent() {
  return `
                <thead>
                    <tr>
                      <th class="column-thumbnail">Images</th>
                      <th class="column-name">Product</th>
                      <th class="column-price">Unit Price</th>
                      <th class="column-quantity">Quantity</th>
                      <th class="column-subtotal">Total</th>
                      <th class="column-remove">Remove</th>
                    </tr>
                  </thead>

                  <tbody id="cartRow">
                    
                  </tbody>
    `;
}

function createCouponSection() {
  return `<div class="full-width">
                  <div class="coupon-area">
                    <div class="coupon-input">
                      <input
                        id="coupon-code"
                        placeholder="Coupon code"
                        type="text"
                      />
                      <button class="btn btn-border">Apply Coupon</button>
                    </div>
                    <div class="coupon-update">
                      <button class="btn btn-border">Update Cart</button>
                    </div>
                  </div>
                </div>`;
}
function createTotalPricesSection() {
  return `
            <div class="cart-summary">
            <h2>Cart Totals</h2>
            <ul>
            <li>Total <span id="total-invice-contaner"></span></li>
            </ul>
            <span class="proceed-btn">Proceed to Checkout</span>
            </div>
  `;
}

const inputs = document.querySelectorAll(".cart-plus-minus input");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (isNaN(e.target.value) || e.target.value < 1) {
      e.target.value = 1;
    }
  });
});

function setCartProduct({ id, name, price, description, image }) {
  if (!id || !name || !price || !description || !image)
    return window.alert("There are some thing wrong here!");

  cart.push({ id, name, price, description, image, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
}

// cart Helper Functions
function getCartProducts() {
  let cartInLocalStorage = JSON.parse(localStorage.getItem("cart"));
  if (cartInLocalStorage.length > 0) return cartInLocalStorage;
  return null;
}

// setCartProduct({
//   id: "product7",
//   name: "Gaming Mouse",
//   price: 69.99,
//   description: "Ergonomic gaming mouse with 16000 DPI sensor.",
//   image: "https://m.media-amazon.com/images/I/71C5DxSXaSL.jpg",
// });

// setCartProduct({
//   id: 5,
//   name: "Laptop",
//   price: 999.99,
//   description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
//   image: "https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg",
// });

console.log(getCartProducts());

function renderCartProducts() {
  if (!getCartProducts()) {
    cartTable.innerHTML = `<h3>No products in your cart!</h3>`;
  } else {
    cartTable.innerHTML = cartTableContent();
    couponSection.innerHTML = createCouponSection();
    totalPricesSection.innerHTML = createTotalPricesSection();
    cartRow = document.getElementById("cartRow");
    getCartProducts().map((product) => {
      cartRow.innerHTML += `
                    <tr id=${product.id} key=${product.id}>
                        <td class="column-thumbnail">
                          <a href="product-details.html">
                            <img
                              src=${product.image}
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td class="column-name">
                          <a href="product-details.html">${product.name}</a>
                        </td>
                        <td class="column-price"><span>$${
                          product.price
                        }</span></td>
                        <td class="column-quantity">
                          <div class="cart-plus-minus">
                            <input type="text" value=${product.qty} />
                            <button class="dec qtybutton" onclick='dec(event, "${
                              product.id
                            }", ${product.price})'>-</button>
                            <button class="inc qtybutton" onclick='inc(event, "${
                              product.id
                            }", ${product.price})'>+</button>
                          </div>
                        </td>
                        <td class="column-subtotal">
                          <span id="subtotal-${product.id}">
                          $${(product.price * product.qty).toFixed(2)}
                          </span>
                        </td>
                        <td class="column-remove">
                          <span href="#" onclick='removeProductFromCart("${
                            product.id
                          }")'>×</span>
                        </td>
                      </tr>
      `;
    });
    getTotal(cart).toFixed(2);
  }
}
renderCartProducts();

// let str1 = 'mostafa',
//     str2 = 'mostafa';

// console.log(str1.localeCompare(str2));


function multiplier(factor) {
  return function(x) {
      return x * factor;
  };
}
// const double = multiplier(2);
console.log(multiplier(2)(5)); // Output: 10

