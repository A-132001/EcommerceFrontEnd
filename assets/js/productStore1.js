

xhr = new XMLHttpRequest()
xhr.open("GET", "ecommerce.json", true)
xhr.send()
var data = []
var elements = document.getElementById("productData")
var members = document.getElementById("store-links")
xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
        data = JSON.parse(this.responseText)
        console.log(data)
        displayName()
        displayProductsStore1(data.store1.products)
        displayStores(data.stores.names)
    }

}

function displayName() {
    var element = document.createElement("h2")
    element.classList.add("styleH2")
    element.innerHTML = `
 ${data.store1.name}

`
    elements.appendChild(element)
}

function displayProductsStore1(products) {



    products.forEach(product => {
        var element1 = document.createElement("div")
        element1.classList.add("stylediv")
        element1.innerHTML = `
    <h3>${product.name}</h3>
    <h5>${product.description}</h5>
    <img src ="${product.image}" width="250px">
    <h6> ${product.price} $</h6>
    `
        elements.appendChild(element1)
        var element3 = document.createElement("button")
        var element4 = document.createElement("p")
        element4.innerHTML = "&#9825";
        element1.appendChild(element4)
        element3.textContent = `add to cart`
        element3.style.display = "none"
        element4.style.display = "none"
        element1.appendChild(element3)
        element3.classList.add("buttonStyle")
        element4.classList.add("heartStyle")
        function buttonAdd() {
            element4.style.display = "block"
            element3.style.display = "block"
        }
        function buttondel() {
            element3.style.display = "none"
            element4.style.display = "none"
        }
        element1.onmouseenter = buttonAdd
        element1.onmouseleave = buttondel



    });


}

// function displayStores(stores) {
//     stores.forEach(store => {
//         var member = document.createElement("div");
//         member.innerHTML = `<p>${store.name}<p>`; // عرض اسم المتجر
//         members.appendChild(member);
//     });
// }

