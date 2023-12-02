import React from "react";
import ProductMinial from "./ProductMinimal";
import styles from "./ProductMinimalCol.module.css";
function ProductMinimalWrap({ title }) {
  return (
    <div className={styles.product_showcase}>
      <h2 className={styles.title}>{title}</h2>
      <div className={`${styles.showcase_wrapper} ${styles.has_scrollbar}`}>
        <div className={styles.showcase_container}>
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

        <div className={styles.showcase_container}>
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
