let cartInStorage = JSON.parse(localStorage.getItem("cart")) || [];
document.addEventListener("DOMContentLoaded", () => {
  try {
    let APIresult;
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://fake-products-api-kappa.vercel.app/api/products",
      true
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const productsContainer = document.querySelector(".products");
        APIresult = data;
        const products = data.store1.products;
        console.log(products);
      
        // Home page side navbar function -- mostafa
        window.showStoreProducts = function(storeData) {
          localStorage.setItem("storeDate", JSON.stringify(storeData));
          console.log(storeData);
        
          window.location.href = 'productStore.html';
        };
        
        // Home page side navbar -- mostafa

        let storeLinks = document.getElementById("store-links");
        for (const res in APIresult) {
          const link = document.createElement("a");
          link.href = "#";
          link.id = APIresult[res].name;
          link.textContent = APIresult[res].name;
  
          link.addEventListener("click", () => showStoreProducts(APIresult[res].products));
        
          storeLinks.appendChild(link);
        }

        console.log(APIresult);

        let productHTML = '';
        products.forEach((product) => {
          let ProductInCart = cartInStorage.find(p => p.id === product.id);
          productHTML += `
            <div class="product swiper-slide" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-description="${product.description}" data-image="${product.image}">
              <div class="icons">
                <span class="cart-icon"><i class="fa-solid fa-cart-plus" id="${product.id}-icon" style="color: ${ProductInCart ? 'gray' : 'inherit'};"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>
              <span class="sale_present">%10</span>
              <div class="img_product">
                <img src="${product.image}" alt="${product.name}">
                <img src="${product.image}" alt="${product.name}" class="img_hover">
              </div>
              <h3 class="name_product">
                <a href="#">${product.name}</a>
              </h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="price">
                <p><span>$${product.price.toFixed(2)}</span></p>
                <p class="old_price">$${(product.price * 1.1).toFixed(2)}</p>
              </div>
            </div>
          `;
        });
        productsContainer.innerHTML = productHTML;

    // Add event delegation for cart icons
    productsContainer.addEventListener('click', (event) => {
      if (event.target.closest('.cart-icon')) {
        const productElement = event.target.closest('.product');
        const id = productElement.dataset.id;
        const name = productElement.dataset.name;
        const price = parseFloat(productElement.dataset.price);
        const description = productElement.dataset.description;
        const image = productElement.dataset.image;

        // Invoke setCartProduct
        setCartProduct({id, name, price, description, image});
      }
    });
        const swiper = new Swiper(".mySwiper", {
          slidesPerView: 4,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      } else {
        console.error("Failed to load JSON file. Status:", xhr.status);
      }
    };
    xhr.onerror = function () {
      console.error("Error fetching the JSON file.");
    };
    xhr.send();
  } catch (error) {
    console.error("Error:", error);
  }


  


});





function setCartProduct({ id, name, price, description, image }) {
  if (!id || !name || !price || !description || !image)
    return window.alert("There are some thing wrong here!");

  const isProductInCart = cartInStorage.some((product) => product.id === id);

  if (isProductInCart) {
    return window.alert("This product is already in the cart!");
  }
  
  cartInStorage.push({ id, name, price, description, image, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cartInStorage));
  document.getElementById(`${id}-icon`).style.backgroundColor = 'gray';
}




