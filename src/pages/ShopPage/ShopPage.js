import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import "../../css/ShopPage.css";
import Recommended from "../../components/Recommended/Recommended";
import Product from "../../components/ProductsComponent/Product/Product";
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
