import React from "react";
import img_shirt1 from "../../../images/products/shirt-1.jpg";
import { NavLink } from "react-router-dom";
import styles from "./ProductMinimal.module.css";
function ProductMinial({ title, name, prevPrice, CurPrice }) {
  return (
    <NavLink to="/product/2" className={styles.showcase}>
      <img
        src={img_shirt1}
        alt="relaxed short full sleeve t-shirt"
        width="70"
        className="showcase-img"
      />

      <div className={styles.showcase_content}>
        <h4 className={styles.showcase_title}>{title}</h4>

        <h4 className={styles.showcase_title}>{name}</h4>

        <div className={styles.price_box}>
          <p className={styles.price}>{CurPrice}</p>
          <del>{prevPrice}</del>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductMinial;
