xhr = new XMLHttpRequest();
xhr.open("GET", "https://fake-products-api-kappa.vercel.app/api/products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let productDetails = [];

var data = [];
var elements = document.getElementById("productData");
var members = document.getElementById("store-link");

document.addEventListener("DOMContentLoaded", function () {
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      data = response;

      const storeData = JSON.parse(localStorage.getItem("cart")) || response.store1.products;
      console.log(storeData);

      showProductss("store1");
      displayName();
    } else {
      console.error("Failed to fetch data from API.");
    }
  };
  xhr.send();
});

function displayName() {
  var element = document.createElement("h2");
  element.classList.add("styleH2");
  let links = '';
  for (let index = 1; index <= Object.keys(data).length; index++) {
    const storeKey = `store${index}`;
    if (data[storeKey]) {
      links += `<a href="#" class="store-link" onclick="showProductss('${storeKey}')">${data[storeKey].name}</a>`;
    }
  }
  element.innerHTML = links;
  members.appendChild(element);
}

function showProductss(storeId) {
  elements.innerHTML = '';

  const storeData = data[storeId];
  if (storeData && storeData.products) {
    storeData.products.forEach((product) => {
      var element1 = document.createElement("div");
      element1.classList.add("stylediv");

      element1.innerHTML = `
        <h3>${product.name}</h3>
        <h5>${product.description}</h5>
        <img class='productImage' src ="${product.image}" width="250px">
        <h6>${product.price} $</h6>
      `;

      elements.appendChild(element1);

      var element3 = document.createElement("button");
      var element4 = document.createElement("p");
      element4.innerHTML = "&#9825";
      element1.appendChild(element4);

      element3.textContent = `Add to Cart`;
      element3.style.display = "none";
      element4.style.display = "none";
      element1.appendChild(element3);

      element3.classList.add("buttonStyle");
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
  } else {
    console.error(`Store data for ${storeId} not found.`);
  }
}

function setCartProduct({ id, name, price, description, image }) {
  if (!id || !name || !price || !description || !image)
    return window.alert("There is something wrong here!");

  const isProductInCart = cart.some((product) => product.id === id);

  if (isProductInCart) {
    return window.alert("This product is already in the cart!");
  }

  cart.push({ id, name, price, description, image, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
}

function sendDataToProductDetails({ id, name, price, description, image }) {
  if (!id || !name || !price || !description || !image)
    return window.alert("There is something wrong here!");
  productDetails.push({ id, name, price, description, image, qty: 1 });
  localStorage.setItem("productDetails", JSON.stringify(productDetails));
}
