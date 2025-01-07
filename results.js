
const searchTerm = localStorage.getItem("searchTerm");
fetch("./javascript/items.json")
  .then(response => response.json())
  .then(data => {
    const resultsContainer = document.getElementById("results");
    const allProducts = Object.values(data).flatMap(store => store.products);

    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("result");

        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>Price: <strong>$${product.price.toFixed(2)}</strong></p>
          <p>${product.description}</p>
        `;
        resultsContainer.appendChild(productElement);
      });
    } else {
      resultsContainer.innerHTML = "<p>No products found.</p>";
    }
  })
  .catch(error => {
    console.error("Error fetching products:", error);
    document.getElementById("results").innerHTML = "<p>Failed to load results.</p>";
  });
