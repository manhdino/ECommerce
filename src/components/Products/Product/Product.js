import React from "react";
import img_jacket3 from "../../../images/products/jacket-3.jpg";
import img_jacket4 from "../../../images/products/jacket-4.jpg";
import { NavLink } from "react-router-dom";
import styles from "./Product.module.css";
function Product({ state }) {
  const handleStatus = (status) => {
    if (status === "sale") {
      return `${styles.showcase_badge} ${styles.angle} ${styles.black}`;
    } else if (status === "new") {
      return `${styles.showcase_badge} ${styles.angle} ${styles.pink}`;
    } else {
      return `${styles.showcase_badge}`;
    }
  };
  return (
    <NavLink to="/detail" className={styles.showcase}>
      <div class={styles.showcase_banner}>
        <img
          src={img_jacket3}
          alt="Mens Winter Leathers Jackets"
          width="300"
          class={`${styles.product_img} ${styles.default}`}
        />
        <img
          src={img_jacket4}
          alt="Mens Winter Leathers Jackets"
          width="300"
          class={`${styles.product_img} ${styles.hover}`}
        />

        {state && <p class={handleStatus(state)}>{state}</p>}

        <div class={styles.showcase_actions}>
          <button class={styles.btn_action}>
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button class={styles.btn_action}>
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button class={styles.btn_action}>
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button class={styles.btn_action}>
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div class={styles.showcase_content}>
        <a href="/" class={styles.showcase_category}>
          jacket
        </a>

        <a href="/">
          <h3 class={styles.showcase_title}>Mens Winter Leathers Jackets</h3>
        </a>

        <div class={styles.showcase_rating}>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>

        <div class={styles.price_box}>
          <p class={styles.price}>$48.00</p>
          <del>$75.00</del>
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
