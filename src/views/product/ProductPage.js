import React from "react";
import ProductSale from "../../components/Products/ProductSale/ProductSale";
import Product from "../../components/Products/Product/Product";
import ProductMinimalCol from "../../components/Products/ProductMinimal/ProductMinimalCol";
import styles from "./ProductPage.module.css";

function ProductPage() {
  return (
    <div className={styles.product_wrap}>
      <div className={styles.container}>
        <div className={styles.product_box}>
          <div className={styles.product_minimal}>
            <ProductMinimalCol title="New Arrivals" />
            <ProductMinimalCol title="Trending" />
            <ProductMinimalCol title="Top Rated" />
          </div>

          <div className={styles.product_sale}>
            <h2 className={styles.title}>Deals of the day</h2>
            <div
              className={`${styles.showcase_wrapper} ${styles.has_scrollbar}`}
            >
              <ProductSale />
              <ProductSale />
            </div>
          </div>

          <div className={styles.product_main}>
            <h2 className={styles.title}>New Products</h2>
            <div className={styles.product_grid}>
              <Product state="sale" />
              <Product />
              <Product state="new" />
              <Product state="15%" />
              <Product state="sale" />
              <Product />
              <Product state="new" />
              <Product state="20%" />
              <Product state="sale" />
              <Product />
              <Product state="new" />
              <Product state="25%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
