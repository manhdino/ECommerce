import React from "react";
import shoe1 from "../../../images/products/shoe_1.jpg";
import shoe2 from "../../../images/products/shoe_2.jpg";
import shoe3 from "../../../images/products/shoe_3.jpg";
import shoe4 from "../../../images/products/shoe_4.jpg";
import styles from "./ProductDetail.module.css";
function ProductDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.product_imgs}>
          <div className={styles.img_display}>
            <div className={styles.img_showcase}>
              <img src={shoe2} alt="shoeimage" />
              <img src={shoe1} alt="shoeimage" />
              <img src={shoe3} alt="shoeimage" />
              <img src={shoe4} alt="shoeimage" />
            </div>
          </div>
          <div className={styles.img_select}>
            <div className={styles.img_item}>
              <a href="/">
                <img src={shoe1} alt="shoeimage" />
              </a>
            </div>
            <div className={styles.img_item}>
              <a href="/">
                <img src={shoe2} alt="shoeimage" />
              </a>
            </div>
            <div className={styles.img_item}>
              <a href="/">
                <img src={shoe3} alt="shoeimage" />
              </a>
            </div>
            <div className={styles.img_item}>
              <a href="/">
                <img src={shoe4} alt="shoeimage" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.product_content}>
          <h2 className={styles.product_title}>Nike shoes</h2>
          <a href="/" className={styles.product_link}>
            visit nike store
          </a>
          <div className={styles.product_rating}>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <span> 4.7(21)</span>
          </div>

          <div className={styles.product_price}>
            <p className={styles.new_price}>
              <span>$249.00 (5%)</span>
            </p>
            <p className={styles.last_price}>
              <span>$257.00</span>
            </p>
          </div>

          <div className={styles.product_detail}>
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
          <h4 className={styles.title}>Size</h4>
          <ul className={styles.sizes}>
            <li className={styles.size_active}>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
            <li>41</li>
          </ul>
          <h4 className={styles.title}>Color</h4>
          <ul className={styles.colors}>
            <li className={styles.color_active}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className={styles.purchase_info}>
            <input type="number" min="0" value="1" />
            <button type="button" className={styles.btn}>
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className={styles.btn}>
              Compare
            </button>
          </div>

          <div className={styles.social_links}>
            <a href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="/">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
