import React from "react";
import imgProduct1 from "../../../images/products/1.jpg";
import "./BestSellerProduct.css";
function BestSeller() {
  return (
    <div class="showcase">
      <a href="/" class="showcase-img-box">
        <img
          src={imgProduct1}
          alt="baby fabric shoes"
          width="75"
          height="75"
          class="showcase-img"
        />
      </a>

      <div class="showcase-content">
        <a href="/">
          <h4 class="showcase-title">baby fabric shoes</h4>
        </a>

        <div class="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>

        <div class="price-box">
          <del>$5.00</del>
          <p class="price">$4.00</p>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
