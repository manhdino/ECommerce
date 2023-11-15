import React from "react";
import ProductSale from "../../components/Products/ProductSale/ProductSale";
import Product from "../../components/Products/Product/Product";
import ProductMinimalCol from "../../components/Products/ProductMinimal/ProductMinimalCol";
import styles from "./ProductPage.module.css";

function ProductPage() {
  return (
    <div class={styles.product_wrap}>
      <div class={styles.container}>
        <div class={styles.product_box}>
          <div class={styles.product_minimal}>
            <ProductMinimalCol title="New Arrivals" />
            <ProductMinimalCol title="Trending" />
            <ProductMinimalCol title="Top Rated" />
          </div>

          <div class={styles.product_sale}>
            <h2 class={styles.title}>Deals of the day</h2>
            <div class={`${styles.showcase_wrapper} ${styles.has_scrollbar}`}>
              <ProductSale />
              <ProductSale />
            </div>
          </div>

          <div class={styles.product_main}>
            <h2 class={styles.title}>New Products</h2>
            <div class={styles.product_grid}>
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
