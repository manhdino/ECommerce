import React from "react";
import Features from "../../components/Features/Features";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  return (
    <>
      <Banner />
      <ProductsComponent />
      <Features />
    </>
  );
}

export default HomePage;
