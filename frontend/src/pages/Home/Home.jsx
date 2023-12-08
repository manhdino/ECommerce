import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import Register from "./Register";
import LocationSprade from "./LocationSprade";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";
import CategoryShowCase from "./CategoryShowCase";

function Home() {
  return (
    <>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </>
  );
}

export default Home;
