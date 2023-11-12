import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navigation/Nav";
import Recommended from "../../components/Recommended/Recommended";
import Product from "../../components/Products/Products";
function ShopPage() {
  return (
    <>
      <Nav />
      <Recommended />
      <SideBar />
      <Product />
    </>
  );
}

export default ShopPage;
