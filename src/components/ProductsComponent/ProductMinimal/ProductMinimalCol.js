import React from "react";
import ProductMinial from "./ProductMinimal";
import styles from "./ProductMinimalCol.module.css";
function ProductMinimalWrap({ title }) {
  return (
    <div class={styles.product_showcase}>
      <h2 class={styles.title}>{title}</h2>
      <div class={styles.showcase_wrapper}>
        <div class={styles.showcase_container}>
          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />

          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />
          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />
          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />
        </div>

        <div class="showcase-container">
          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />

          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />
          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />
          <ProductMinial
            title="Relaxed Short Full Sleeve T-Shirt"
            name="Clothes"
            prevPrice="67.00"
            CurPrice="45.00"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductMinimalWrap;
