import React from "react";
import img_shirt1 from "../../../images/products/shirt-1.jpg";
import { NavLink } from "react-router-dom";
import styles from "./ProductMinimal.module.css";
function ProductMinial({ title, name, prevPrice, CurPrice }) {
  return (
    <NavLink to="/detail" className={styles.showcase}>
      <a href="/" class="showcase-img-box">
        <img
          src={img_shirt1}
          alt="relaxed short full sleeve t-shirt"
          width="70"
          class="showcase-img"
        />
      </a>

      <div class={styles.showcase_content}>
        <a href="/">
          <h4 class={styles.showcase_title}>{title}</h4>
        </a>

        <a href="/" class={styles.showcase_title}>
          {name}
        </a>

        <div class={styles.price_box}>
          <p class={styles.price}>{CurPrice}</p>
          <del>{prevPrice}</del>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductMinial;
