// open and close card

function open_cart() {
  window.location.href = "./cart.html";
}
// function close_cart() {
//   cart.classList.remove("active");
// }
// -------------------------------------
function navbarContent() {
  return `
      <header>
        <div class="container top-nav">
            <a href="#" class="logo"><img src="img/logo-black.png" alt=""></a>
            <form action="" class="search">
                <input type="search" placeholder="Search for products ...">
                <button type="submit">Search</button>
            </form>

            <div class="cart_header">
                <div onclick="open_cart()" class="icon_cart">
                    <i class="fa-solid fa-bag-shopping"></i> <span class="class_item">0</span>
                </div>
                <div class="tottal_price">
                    <p>My Cart:</p>
                    <p class="price_cart_Head">0$</p>
                </div>
            </div>
        </div>

        <nav>
            <div class="links container">
                <ul>
                    <li class="active"><a href="">Home</a></li>
                    <li><a href="">all products</a></li>
                    <li><a href="">about us</a></li>
                    <li><a href="">contact</a></li>
                </ul>

                <div class="loging_signup">
                    <a href="#">login<i class="fa-light fa-arrow-right-to-bracket"></i> </a>
                    <a href="#">sign up<i class="fa-solid fa-user-plus"></i></a>

                </div>
            </div>
        </nav>
    </header>
  
  `;
}


let header = document.getElementById('header');
header.innerHTML = navbarContent();