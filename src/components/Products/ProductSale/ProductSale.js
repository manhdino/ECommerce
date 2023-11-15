import React from "react";
import img_shirt1 from "../../../images/products/shirt-1.jpg";
import { NavLink } from "react-router-dom";
import styles from "./ProductSale.module.css";
function ProductSale() {
  return (
    <NavLink to="/detail" className={styles.showcase_container}>
      <div class={styles.showcase}>
        <div class="showcase-banner">
          <img
            src={img_shirt1}
            alt="relaxed short full sleeve t-shirt"
            width="70"
            class={styles.showcase_img}
          />
        </div>

        <div class={styles.showcase_content}>
          <div class={styles.showcase_rating}>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <a href="/">
            <h3 class={styles.showcase_title}>
              shampoo, conditioner & facewash packs
            </h3>
          </a>

          <p class={styles.showcase_desc}>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet consectetur Lorem ipsum dolor
          </p>

          <div class={styles.price_box}>
            <p class={styles.price}>$150.00</p>

            <del>$200.00</del>
          </div>

          <button class={styles.add_cart_btn}>add to cart</button>

          <div class={styles.showcase_status}>
            <div class={styles.wrapper}>
              <p>
                already sold: <b>20</b>
              </p>

              <p>
                available: <b>40</b>
              </p>
            </div>

            <div class={styles.showcase_status_bar}></div>
          </div>

          <div class="countdown-box">
            <p class={styles.countdown_desc}>Hurry Up! Offer ends in:</p>

            <div class={styles.countdown}>
              <div class={styles.countdown_content}>
                <p class={styles.display_number}>360</p>
                <p class={styles.display_text}>Days</p>
              </div>

              <div class={styles.countdown_content}>
                <p class={styles.display_number}>24</p>
                <p class={styles.display_text}>Hours</p>
              </div>

              <div class={styles.countdown_content}>
                <p class={styles.display_number}>59</p>
                <p class={styles.display_text}>Min</p>
              </div>

              <div class={styles.countdown_content}>
                <p class={styles.display_number}>00</p>
                <p class={styles.display_text}>Sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductSale;
