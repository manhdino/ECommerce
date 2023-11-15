import React from "react";
import app from "../../images/app.jpg";
import play from "../../images/play.jpg";
import pay from "../../images/pay.png";
import logo from "../../images/logo.png";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.col}>
          <img src={logo} className={styles.logo} alt="" />
          <h4 className={styles.title}>Contact</h4>
          <p>
            <strong>Address: </strong>Truong Dinh, Hai Ba Trung, Hanoi{" "}
          </p>
          <p>
            <strong>Phone: </strong>012343634 or 07971232453{" "}
          </p>
          <p>
            <strong>Hours: </strong>10:00-18:00, Mon - Sat
          </p>
          <div className={styles.follow}>
            <h4>Follow us</h4>
            <div className={styles.icon}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <h4 className={styles.title}>About</h4>
          <a href="/">About us</a>
          <a href="/">Delivery Information</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Condition</a>
          <a href="/">Contact Us</a>
        </div>
        <div className={styles.col}>
          <h4 className={styles.title}>My Account</h4>
          <a href="/">Sign In</a>
          <a href="/">View Cart</a>
          <a href="/">My Wishlist</a>
          <a href="/">Track My Order</a>
          <a href="/">Help</a>
        </div>
        <div className={`${styles.col} ${styles.install}`}>
          <h4 className={styles.title}>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className={styles.row}>
            <img src={app} alt="" />
            <img src={play} alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay} alt="" />
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>Copyright ©2021 Cara - Shoes store by Dinomanh</p>
      </div>
    </>
  );
}

export default Footer;
