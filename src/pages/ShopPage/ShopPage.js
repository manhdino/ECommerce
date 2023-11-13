import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import "../../css/ShopPage.css";
import Recommended from "../../components/Recommended/Recommended";
function ShopPage() {
  return (
    <>
      <div class="product-wrap">
        <div class="product-container">
          <SideBar />
          <div class="product-box">
            <div class="product-main">
              <Recommended />
              <div class="product-grid">
                <SingleProduct state="15%" />
                <SingleProduct state="sale" />
                <SingleProduct />
                <SingleProduct state="new" />
                <SingleProduct state="15%" />
                <SingleProduct state="sale" />
                <SingleProduct />
                <SingleProduct state="new" />
                <SingleProduct state="15%" />
                <SingleProduct state="sale" />
                <SingleProduct />
                <SingleProduct state="new" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
