const urlParams = new URLSearchParams(window.location.search);

const storeName = urlParams.get('storeName');
const ownerName = urlParams.get('ownerName');
const ownerEmail = urlParams.get('ownerEmail');
const storeEmail = urlParams.get('storeEmail');
const phone = urlParams.get('phone');
const address = urlParams.get('address');

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

var idInput = document.getElementById("product-id");
var titleInput = document.getElementById("product-title");
var priceInput = document.getElementById("product-price");
var saveButton = document.getElementById("save-product");
var cancelButton = document.getElementById("cancel-all");
var productList = document.getElementById("product-list");
var errorMessage = document.getElementById("error-message");

function addProduct() {
    var id = idInput.value.trim();
    var title = titleInput.value.trim();
    var price = priceInput.value.trim();

    errorMessage.textContent = "";

    if (id === "" || title === "" || price === "") {
        errorMessage.textContent = "Please fill in all fields (ID, Title, and Price).";
        return;
    }

    var existingIds = Array.from(productList.children).map((tr) =>
        tr.getAttribute("data-id")
    );
    if (existingIds.includes(id)) {
        errorMessage.textContent = "Product ID must be unique.";
        return;
    }

    var tr = document.createElement("tr");
    tr.setAttribute("data-id", id);

    var productIdTd = document.createElement("td");
    productIdTd.textContent = id;
    tr.appendChild(productIdTd);

    var productTitleTd = document.createElement("td");
    productTitleTd.textContent = title;
    tr.appendChild(productTitleTd);

    var productPriceTd = document.createElement("td");
    productPriceTd.textContent = "$" + price;
    tr.appendChild(productPriceTd);

    var actionsTd = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.onclick = function () {
        idInput.value = id;
        titleInput.value = title;
        priceInput.value = price;
        productList.removeChild(tr); 
    };
    actionsTd.appendChild(editButton);

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    removeButton.onclick = function () {
        productList.removeChild(tr); 
    };
    actionsTd.appendChild(removeButton);

    tr.appendChild(actionsTd);

    productList.appendChild(tr);

    idInput.value = "";
    titleInput.value = "";
    priceInput.value = "";
}

saveButton.addEventListener("click", addProduct);

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
    
    win.document.getElementById("yes-clear").addEventListener("click", function() {
        clearAllProducts();
        win.close();
    });
    
    win.document.getElementById("no-cancel").addEventListener("click", function() {
        win.close(); 
    });
}

function clearAllProducts() {
    productList.innerHTML = "";
}

cancelButton.addEventListener("click", openConfirmationPopup);
