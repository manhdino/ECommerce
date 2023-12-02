import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import "../../css/ShopPage.css";
import Recommended from "../../components/Recommended/Recommended";
import Product from "../../components/Products/Product/Product";
import styles from "./ShopPage.module.css";

function ShopPage() {
  return (
    <>
      <div className="product-wrap">
        <div className={styles.container}>
          <SideBar />
          <div className={styles.product_box}>
            <div className={styles.main}>
              <Recommended />
              <div className={styles.grid}>
                <Product state="15%" />
                <Product state="sale" />
                <Product />
                <Product state="new" />
                <Product state="15%" />
                <Product state="sale" />
                <Product />
                <Product state="new" />
                <Product state="15%" />
                <Product state="sale" />
                <Product />
                <Product state="new" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
