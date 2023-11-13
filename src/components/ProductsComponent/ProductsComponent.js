import React from "react";
import "../../css/ProductsComponent.css";
import ProductMinial from "./ProductMinimal/ProductMinial";
import ProductSale from "./ProductSale/ProductSale";
import Product from "./Product/Product";
function ProductsComponent() {
  return (
    <div class="product-wrap">
      <div class="product-container">
        <div class="product-box">
          <div class="product-minimal">
            <div class="product-showcase">
              <h2 class="title">New Arrivals</h2>
              <div class="showcase-wrapper has-scrollbar">
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

            <div class="product-showcase">
              <h2 class="title">Trending</h2>
              <div class="showcase-wrapper  has-scrollbar">
                <div class="showcase-container">
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                </div>

                <div class="showcase-container">
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                  <ProductMinial
                    title="Running & Trekking Shoes - White"
                    name="Sports"
                    prevPrice="97.00"
                    CurPrice="45.00"
                  />
                </div>
              </div>
            </div>

            <div class="product-showcase">
              <h2 class="title">Top Rated</h2>
              <div class="showcase-wrapper  has-scrollbar">
                <div class="showcase-container">
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                </div>
                <div class="showcase-container">
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                  <ProductMinial
                    title="Pocket Watch Leather Pouch"
                    name="Wathes"
                    prevPrice="65.00"
                    CurPrice="50.00"
                  />
                </div>
              </div>
            </div>
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
