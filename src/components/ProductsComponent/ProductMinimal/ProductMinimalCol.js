import React from "react";
import ProductMinial from "./ProductMinimal";
function ProductMinimalWrap({ title }) {
  return (
    <div class="product-showcase">
      <h2 class="title">{title}</h2>
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
  );
}

export default ProductMinimalWrap;
