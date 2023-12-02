import React from "react";
import imgProduct1 from "../../../images/products/1.jpg";
import "./BestSellerProduct.css";
function BestSeller() {
  return (
    <div className="showcase">
      <a href="/" className="showcase-img-box">
        <img
          src={imgProduct1}
          alt="baby fabric shoes"
          width="75"
          height="75"
          className="showcase-img"
        />
      </a>

      <div className="showcase-content">
        <a href="/">
          <h4 className="showcase-title">baby fabric shoes</h4>
        </a>

        <div className="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>

        <div className="price-box">
          <p className="price">$4.00</p>
          <del>$5.00</del>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
