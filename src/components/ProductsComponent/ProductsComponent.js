import React from "react";
import "../../css/ProductsComponent.css";
import ProductSale from "./ProductSale/ProductSale";
import Product from "./Product/Product";
import ProductMinimalCol from "./ProductMinimal/ProductMinimalCol";
function ProductsComponent() {
  return (
    <div class="product-wrap">
      <div class="product-container">
        <div class="product-box">
          <div class="product-minimal">
            <ProductMinimalCol title="New Arrivals" />
            <ProductMinimalCol title="Trending" />
            <ProductMinimalCol title="Top Rated" />
          </div>

          <div class="product-featured">
            <h2 class="title">Deal of the day</h2>
            <div class="showcase-wrapper has-scrollbar">
              <ProductSale />
              <ProductSale />
            </div>
          </div>

          <div class="product-main">
            <h2 class="title">New Products</h2>

            <div class="product-grid">
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
export default ProductsComponent;
