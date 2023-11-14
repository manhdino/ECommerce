import React from "react";
import shoe1 from "../../images/products/shoe_1.jpg";
import shoe2 from "../../images/products/shoe_2.jpg";
import shoe3 from "../../images/products/shoe_3.jpg";
import shoe4 from "../../images/products/shoe_4.jpg";
import "../../css/DetailProduct.css";
function DetailProduct() {
  return (
    <div class="card-wrapper">
      <div class="card">
        <div class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img src={shoe1} alt="shoeimage" />
              <img src={shoe2} alt="shoeimage" />
              <img src={shoe3} alt="shoeimage" />
              <img src={shoe4} alt="shoeimage" />
            </div>
          </div>
          <div class="img-select">
            <div class="img-item">
              <a href="/" data-id="1">
                <img src={shoe1} alt="shoeimage" />
              </a>
            </div>
            <div class="img-item">
              <a href="/" data-id="2">
                <img src={shoe2} alt="shoeimage" />
              </a>
            </div>
            <div class="img-item">
              <a href="/" data-id="3">
                <img src={shoe3} alt="shoeimage" />
              </a>
            </div>
            <div class="img-item">
              <a href="/" data-id="4">
                <img src={shoe4} alt="shoeimage" />
              </a>
            </div>
          </div>
        </div>
        <div class="product-content">
          <h2 class="product-title">nike shoes</h2>
          <a href="/" class="product-link">
            visit nike store
          </a>
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div class="product-price">
            <p class="new-price">
              <span>$249.00 (5%)</span>
            </p>
            <p class="last-price">
              <span>$257.00</span>
            </p>
          </div>

          <div class="product-detail">
            <h2>about this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
            </p>

            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div class="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" class="btn">
              Add to Cart <i class="fas fa-shopping-cart"></i>
            </button>
            <button type="button" class="btn">
              Compare
            </button>
          </div>

          <div class="social-links">
            <p>Share At: </p>
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="/">
              <i class="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
