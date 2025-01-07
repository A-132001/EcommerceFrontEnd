function footerContent() {
  return `
    <div class="back_to_top">
        <p>back to top</p>
     </div>

     <div>
        <div class="container">
            <div class="big_row">
                <img src="./assets/images/footer_images/logo-white.png" alt="">
                <div class="hotline">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H200q-33 0-56.5-23.5T120-240v-280q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v400q0 33-23.5 56.5T760-40H480ZM200-240h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z"/></svg>                        

                    <div class="text">
                        <h6>(+100) 123 456 7890</h6>
                    </div>
                </div>

                <p>Add: Walls Street 68, Mahattan, New York, USA</p>
                 <p> Email: info@thebuesky.com</p>  
                  <p>  Fax: (+100) 123 456 7890 - (+100) 123 456 7891</p>
            </div>

            <div class="row">
                <h4>Information</h4>
                <div class="links">
                    <a href="#"> Custom Service </a>
                    <a href="#">F.A.Q.’s</a>
                    <a href="#">Ordering Tracking</a>
                    <a href="#"> Contacts</a>
                    <a href="#">Events</a>
                    <a href="#">Popular</a>


                </div>
            </div>
                      
            <div class="row">
                <h4>Payment &amp; Shipping</h4>
                <div class="links">
                 <a href="#">Terms Of Use</a>
                <a href="#">Payment Methods</a>
                <a href="#">Shipping Guide</a>
                <a href="#">Locations We Ship To</a>
                <a href="#">Estimated Delivery Time</a>
                 <a href="#">Express</a>

                </div>
            </div>

            <div class="row">
                <h4>Our Services</h4>
                <div class="links">
                    <a href="#">Sitemap</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Your Account</a>
                    <a href="#">Advanced Search</a>
                    <a href="#">Terms & Condition</a>
                    <a href="#"> Contact Us</a>

                </div>
            </div>

            <div class="row">
                <h4>My Account</h4>
                <div class="links">
                    <a href="#"> About us </a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Discount</a>
                    <a href="#">Custom Service</a>

                </div>

                
            </div>

        </div> 


        <div class="footer_mid">
               
                        <div class="container">
                            <p>
                                <a href="">Air Conditioners</a>
                                <a href="">Audios & Theaters</a>
                                <a href="">Car Electronics</a>
                                <a href="">Office Electronics</a>
                                <a href="">TV Televisions</a>
                                <a href="">Washing Machines</a>

                            </p>
                            <p>
                                <a href="">Cookware</a>
                                <a href="">Decoration</a>
                                <a href="">Scanners</a>
                                <a href="">Projectors</a>
                                <a href="">Store</a>
                                <a href="">Utensil & Gadget </a>
                                <a href="#">Powers And Hand Tools </a>

                            </p>
                            <p>
                                <a href="#">4K Ultra</a>
                                <a href="#"> HD TVs </a>
                                <a href="#">LED TVs</a>
                                <a href="#">OLED TVs</a>
                                <a href="#">Desktop</a>
                                <a href="#">PC</a>
                                <a href="#">Laptop</a>
                                <a href="#">Smartphones</a>
                                <a href="#">Tablet</a>
                                <a href="#">Game Controller</a>
                                <a href="#">Audio &amp; Video</a>
                                <a href="#"> Wireless Speaker</a>
                                <a href="#">Drone</a>

                            </p>
                        </div>
                        <div class="app_store">
                            <h4>Download The App - Get 30% Sale Coupon</h4>
                            <a href="#"><img src="./assets/images/footer_images/app-store.jpg" alt=""></a>
                        </div>

                       
            
        </div>

         



        <div class="bottom_footer">
            <div class="container">
                <p>Copyright &copy; <span>Topico</span> all rights reserved</p>
                 <div class="payment_img">
                    <img src="./assets/images/footer_images/payment-1.png" alt="">
                    <img src="./assets/images/footer_images/payment-2.png" alt="">
                    <img src="./assets/images/footer_images/payment-3.png" alt="" >
                    <img src="./assets/images/footer_images/payment-4.png" alt="" >
                </div>

            </div>
        </div>
     </div>
    `;
}

let footer =  document.getElementById("footer");
footer.innerHTML = footerContent();

let back_to_top = document.querySelector(".back_to_top")
back_to_top.addEventListener("click", function () {
    window.scrollTo ({
        top:0,
        behavior:"smooth" 
    })
    
})

