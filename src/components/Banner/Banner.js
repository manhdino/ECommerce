import React from "react";
import imgBanner1 from "../../images/banner/banner-1.jpg";
import imgBanner2 from "../../images/banner/banner-2.jpg";
import imgBanner3 from "../../images/banner/banner-3.jpg";
import styles from "./Banner.module.css";
import { NavLink } from "react-router-dom";
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={`${styles.slider_container} ${styles.has_scrollbar}`}>
          <div className={styles.slider_item}>
            <img
              src={imgBanner1}
              alt="women's latest fashion sale"
              className={styles.banner_img}
            />

            <div className={styles.banner_content}>
              <p className={styles.banner_subtitle}>Trending item</p>

              <h2 className={styles.banner_title}>
                Women's latest fashion sale
              </h2>

              <p className={styles.banner_text}>
                starting at $<b>20</b>.00
              </p>

              <NavLink to="/shop" className={styles.banner_btn}>
                Shop now
              </NavLink>
            </div>
          </div>

          <div className={styles.slider_item}>
            <img
              src={imgBanner2}
              alt="modern sunglasses"
              className={styles.banner_img}
            />

            <div className={styles.banner_content}>
              <p className={styles.banner_subtitle}>Trending accessories</p>

              <h2 className={styles.banner_title}>Modern sunglasses</h2>

              <p className={styles.banner_text}>
                starting at $<b>15</b>.00
              </p>

              <NavLink to="/shop" className={styles.banner_btn}>
                Shop now
              </NavLink>
            </div>
          </div>

          <div className={styles.slider_item}>
            <img
              src={imgBanner3}
              alt="new fashion summer sale"
              className={styles.banner_img}
            />

            <div className={styles.banner_content}>
              <p className={styles.banner_subtitle}>Sale Offer</p>

              <h2 className={styles.banner_title}>New fashion summer sale</h2>

              <p className={styles.banner_text}>
                starting at $<b>29</b>.99
              </p>

              <NavLink to="/shop" className={styles.banner_btn}>
                Shop now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
