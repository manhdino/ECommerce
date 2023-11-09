import React from 'react'
import '../../css/FooterComponent.css';
import app from '../../images/app.jpg';
import play from '../../images/play.jpg';
import pay from '../../images/pay.png';
import logo from '../../images/logo.png';
function FooterComponent() {
    return (
        <>
            <footer>
                <div class="col">
                    <img src={logo} class="logo" alt="" />
                    <h4>Contact</h4>
                    <p><strong>Address: </strong>Truong Dinh, Hai Ba Trung, Hanoi </p>
                    <p><strong>Phone: </strong>012343634 or 07971232453 </p>
                    <p><strong>Hours: </strong>10:00-18:00, Mon - Sat</p>
                    <div class="follow">
                        <h4>Follow us</h4>
                        <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fa-brands fa-pinterest-p"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h4>About</h4>
                    <a href="/">About us</a>
                    <a href="/">Delivery Information</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms & Condition</a>
                    <a href="/">Contact Us</a>
                </div>
                <div class="col">
                    <h4>My Account</h4>
                    <a href="/">Sign In</a>
                    <a href="/">View Cart</a>
                    <a href="/">My Wishlist</a>
                    <a href="/">Track My Order</a>
                    <a href="/">Help</a>
                </div>
                <div class="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div class="row">
                        <img src={app} alt="" />
                        <img src={play} alt="" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src={pay} alt="" />
                </div>
            </footer >
            <div class="copyright">
                <p>Copyright ©2021 Cara - Shoes store by Dinomanh</p>
            </div>
        </>
    )
}

export default FooterComponent