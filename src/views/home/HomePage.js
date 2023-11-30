import React from "react";
import Features from "../../components/Features/Features";
import ProductPage from "../product/ProductPage";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  return (
    <>
      <Banner />
      <ProductPage />
      <Features />
    </>
  );
}

export default HomePage;
