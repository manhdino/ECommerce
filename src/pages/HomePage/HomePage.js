import React from "react";
import Features from "../../components/Features/Features";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";

function HomePage() {
  return (
    <>
      <BannerComponent />
      <ProductsComponent />
      <Features />
    </>
  );
}

export default HomePage;
