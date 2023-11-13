import React from "react";
import img_shirt1 from "../../../images/products/shirt-1.jpg";

function ProductMinial({ title, name, prevPrice, CurPrice }) {
  return (
    <div class="showcase">
      <a href="/" class="showcase-img-box">
        <img
          src={img_shirt1}
          alt="relaxed short full sleeve t-shirt"
          width="70"
          class="showcase-img"
        />
      </a>

      <div class="showcase-content">
        <a href="/">
          <h4 class="showcase-title">{title}</h4>
        </a>

        <a href="/" class="showcase-category">
          {name}
        </a>

        <div class="price-box">
          <p class="price">{CurPrice}</p>
          <del>{prevPrice}</del>
        </div>
      </div>
    </div>
  );
}

export default ProductMinial;
