document.addEventListener("DOMContentLoaded", () => {
  try {
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
        productsContainer.innerHTML = "";

        const products = data.store1.products;
        products.forEach((product) => {
          const productHTML = `
                       <div class="product swiper-slide">
                           <div class="icons">
                               <span><i class="fa-solid fa-cart-plus"></i></span>
                               <span><i class="fa-solid fa-heart"></i></span>
                               <span><i class="fa-solid fa-share"></i></span>
                           </div>
                           <span class="sale_present">%10</span>
                           <div class="img_product">
                               <img src="${product.image}" alt="${
            product.name
          }">
                               <img src="${product.image}" alt="${
            product.name
          }" class="img_hover">
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
                               <p class="old_price">$${(
                                 product.price * 1.1
                               ).toFixed(2)}</p>
                           </div>
                       </div>
                   `;

          productsContainer.innerHTML += productHTML;
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
