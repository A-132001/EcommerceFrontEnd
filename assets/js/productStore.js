xhr = new XMLHttpRequest();
xhr.open("GET", "https://fake-products-api-kappa.vercel.app/api/products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

var data = [];
var elements = document.getElementById("productData");
var members = document.getElementById("store-links");




xhr = new XMLHttpRequest();
xhr.open("GET", "https://fake-products-api-kappa.vercel.app/api/products");
xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);

    // displayName();
    displayProductsStore1(response.store1.products);
    // displayStores(data.stores.names);
  }
};
xhr.send();
// function displayName() {
//   var element = document.createElement("h2");
//   element.classList.add("styleH2");
//   element.innerHTML = `
//  ${data.store1.name}

// `;
//   elements.appendChild(element);
// }

function displayProductsStore1(products) {
  products.forEach((product) => {
    var element1 = document.createElement("div");
    element1.classList.add("stylediv");
    element1.innerHTML = `
    <h3>${product.name}</h3>
    <h5>${product.description}</h5>
    <img class='productImage' src ="${product.image}" width="250px">
    <h6> ${product.price} $</h6>
    `;
    elements.appendChild(element1);
    var element3 = document.createElement("button");
    var element4 = document.createElement("p");
    element4.innerHTML = "&#9825";
    element1.appendChild(element4);
    element3.textContent = `add to cart`;
    element3.style.display = "none";
    element4.style.display = "none";
    element1.appendChild(element3);
    element3.classList.add("buttonStyle");
    element3.id = `${product.id}-BTN`;
    element4.classList.add("heartStyle");
    function buttonAdd() {
      element4.style.display = "block";
      element3.style.display = "block";
    }
    function buttondel() {
      element3.style.display = "none";
      element4.style.display = "none";
    }
    element3.onclick = function () {
      setCartProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
      });
    };
    // Display product details and send data by local storge when clicked // Added by Abdo
    var productImage = element1.querySelector(".productImage");
    productImage.onclick = function () {
      sendDataToProductDetails({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
      });
      window.location.href = `product.html`;
    };

    element1.onmouseenter = buttonAdd;
    element1.onmouseleave = buttondel;
  });
}

function setCartProduct({ id, name, price, description, image }) {
  if (!id || !name || !price || !description || !image)
    return window.alert("There are some thing wrong here!");

  const isProductInCart = cart.some((product) => product.id === id);

  if (isProductInCart) {
   
    return window.alert("This product is already in the cart!");
  }

  cart.push({ id, name, price, description, image, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById(`${id}-BTN`).style.backgroundColor = 'gray';
}

// Added by Abdo
let productDetails = [];
function sendDataToProductDetails({ id, name, price, description, image }) {
  if (!id || !name || !price || !description || !image)
    return window.alert("There are some thing wrong here!");
  productDetails.push({ id, name, price, description, image, qty: 1 });
  localStorage.setItem("productDetails", JSON.stringify(productDetails));
}

// function displayStores(stores) {
//     stores.forEach(store => {
//         var member = document.createElement("div");
//         member.innerHTML = `<p>${store.name}<p>`; // عرض اسم المتجر
//         members.appendChild(member);
//     });
// }
