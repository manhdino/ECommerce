import React from "react";
import imgjacket_1 from "../../images/products/jacket-3.jpg";
import imgjacket_2 from "../../images/products/jacket-4.jpg";
import "../../css/SingleProduct.css";
function SingleProduct({ state }) {
  const handleStatus = (status) => {
    if (status === "sale") {
      return "showcase-badge angle black";
    } else if (status === "new") {
      return "showcase-badge angle pink";
    } else {
      return "showcase-badge";
    }
  };
  return (
    <div class="showcase">
      <div class="showcase-banner">
        <img
          src={imgjacket_1}
          alt="Mens Winter Leathers Jackets"
          width="300"
          class="product-img default"
        />
        <img
          src={imgjacket_2}
          alt="Mens Winter Leathers Jackets"
          width="300"
          class="product-img hover"
        />

        {state && <p class={handleStatus(state)}>{state}</p>}

        <div class="showcase-actions">
          <button class="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button class="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button class="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button class="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div class="showcase-content">
        <a href="/" class="showcase-category">
          jacket
        </a>

        <a href="/">
          <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
        </a>

        <div class="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>

        <div class="price-box">
          <p class="price">$48.00</p>
          <del>$75.00</del>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
