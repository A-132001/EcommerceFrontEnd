// Extract all query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get individual pieces of data
const storeName = urlParams.get('storeName');
const ownerName = urlParams.get('ownerName');
const ownerEmail = urlParams.get('ownerEmail');
const storeEmail = urlParams.get('storeEmail');
const phone = urlParams.get('phone');
const address = urlParams.get('address');

// Display welcome message and user information
const welcomeMessage = document.getElementById('welcomeMessage');
const userInfo = document.getElementById('userInfo');

if (storeName && ownerName) {
    welcomeMessage.innerHTML = `<p><strong>Welcome, ${ownerName}!</strong></p>`;
    userInfo.innerHTML = `
        <p><span>Store Name:</span> ${storeName}</p>
        <p><span>Owner Email:</span> ${ownerEmail}</p>
        <p><span>Store Email:</span> ${storeEmail}</p>
        <p><span>Phone:</span> ${phone}</p>
        <p><span>Address:</span> ${address}</p>
    `;
} else {
    welcomeMessage.innerHTML = '<p><strong>Welcome, Guest!</strong></p>';
    userInfo.innerHTML = '<p>No additional information provided.</p>';
}

// Input fields and buttons
var idInput = document.getElementById("product-id");
var titleInput = document.getElementById("product-title");
var priceInput = document.getElementById("product-price");
var saveButton = document.getElementById("save-product");
var cancelButton = document.getElementById("cancel-all");
var productList = document.getElementById("product-list");
var errorMessage = document.getElementById("error-message");

// Add Product
function addProduct() {
    var id = idInput.value.trim();
    var title = titleInput.value.trim();
    var price = priceInput.value.trim();

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Validate input fields
    if (id === "" || title === "" || price === "") {
        errorMessage.textContent = "Please fill in all fields (ID, Title, and Price).";
        return;
    }

    // Check for duplicate IDs
    var existingIds = Array.from(productList.children).map((tr) =>
        tr.getAttribute("data-id")
    );
    if (existingIds.includes(id)) {
        errorMessage.textContent = "Product ID must be unique.";
        return;
    }

    // Create product list item
    var tr = document.createElement("tr");
    tr.setAttribute("data-id", id);

    // Product details container
    var productIdTd = document.createElement("td");
    productIdTd.textContent = id;
    tr.appendChild(productIdTd);

    var productTitleTd = document.createElement("td");
    productTitleTd.textContent = title;
    tr.appendChild(productTitleTd);

    var productPriceTd = document.createElement("td");
    productPriceTd.textContent = "$" + price;
    tr.appendChild(productPriceTd);

    // Actions buttons
    var actionsTd = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.onclick = function () {
        idInput.value = id;
        titleInput.value = title;
        priceInput.value = price;
        productList.removeChild(tr); // Remove the current product for editing
    };
    actionsTd.appendChild(editButton);

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    removeButton.onclick = function () {
        productList.removeChild(tr); // Remove the product from the list
    };
    actionsTd.appendChild(removeButton);

    tr.appendChild(actionsTd);

    productList.appendChild(tr);

    idInput.value = "";
    titleInput.value = "";
    priceInput.value = "";
}

// Event listener for Add Product button
saveButton.addEventListener("click", addProduct);

// Function to open the centered confirmation popup for clearing all products
function openConfirmationPopup() {
    var width = 400;
    var height = 200;
    var left = (window.innerWidth / 2) - (width / 2);
    var top = (window.innerHeight / 2) - (height / 2);

    var win = window.open("", "_blank", `width=${width}, height=${height}, left=${left}, top=${top}`);
    win.document.body.innerHTML = `
        <h2>Are you sure you want to clear all products?</h2>
        <button id="yes-clear">Yes, Clear All</button>
        <button id="no-cancel">Cancel</button>
    `;
    
    // Add event listeners to the buttons in the popup
    win.document.getElementById("yes-clear").addEventListener("click", function() {
        clearAllProducts();
        win.close(); // Close the popup after clearing
    });
    
    win.document.getElementById("no-cancel").addEventListener("click", function() {
        win.close(); // Close the popup without clearing
    });
}

// Function to clear all products
function clearAllProducts() {
    productList.innerHTML = "";
}

// Event listener for Clear All button
cancelButton.addEventListener("click", openConfirmationPopup);
