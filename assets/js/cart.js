//variables
let cart = [];
let cartContainer = document.getElementById("cart"),
  cartTable = document.getElementById("cart-table");

// Methods
function inc(event) {
  const input = event.target.parentElement.querySelector("input");
  let value = parseInt(input.value) || 0;
  input.value = value + 1;
}
function dec(event) {
  const input = event.target.parentElement.querySelector("input");
  let value = parseInt(input.value) || 0;
  if (value > 1) {
    input.value = value - 1;
  }
}
function removeProductFromCart(id) {
    cart.filter(prod => prod.id !== id);

}
function cartTableContent(){
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

                  <tbody>
                    <tr>
                      <td class="column-thumbnail">
                        <a href="product-details.html">
                          <img
                            src="assets/images/product-2.jpeg"
                            alt="Product Image"
                          />
                        </a>
                      </td>
                      <td class="column-name">
                        <a href="product-details.html">Bakix Furniture</a>
                      </td>
                      <td class="column-price"><span>$130.00</span></td>
                      <td class="column-quantity">
                        <div class="cart-plus-minus">
                          <input type="text" value="2"/>
                          <div class="dec qtybutton" onclick='dec(event)'>-</div>
                          <div class="inc qtybutton" onclick='inc(event)'>+</div>
                        </div>
                      </td>
                      <td class="column-subtotal"><span>$130.00</span></td>
                      <td class="column-remove">
                        <span href="#">×</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="column-thumbnail">
                        <a href="product-details.html">
                          <img
                            src="assets/images/product-1.jpeg"
                            alt="Product Image"
                          />
                        </a>
                      </td>
                      <td class="column-name">
                        <a href="product-details.html">Sujon Chair Set</a>
                      </td>
                      <td class="column-price"><span>$120.50</span></td>
                      <td class="column-quantity">
                        <div class="cart-plus-minus">
                          <input type="text" value="1" />
                          <div class="dec qtybutton" onclick='dec(event)'>-</div>
                          <div class="inc qtybutton" onclick='inc(event)'>+</div>
                        </div>
                      </td>
                      <td class="column-subtotal"><span>$120.50</span></td>
                      <td class="column-remove">
                        <span href="#">×</span>
                      </td>
                    </tr>
                  </tbody>
    `;
};
cartTable.innerHTML = cartTableContent();
const inputs = document.querySelectorAll(".cart-plus-minus input");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (isNaN(e.target.value) || e.target.value < 1) {
      e.target.value = 1; 
    }
  });
});
