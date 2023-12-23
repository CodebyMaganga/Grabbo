import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ProductSlider from "./components/ProductSlider";
import AboutUs from "./components/aboutUs";
import SwiperProduct from "./components/SwiperProducts";
import Pricingsection from "./components/Pricingsection";
import Faqs from "./components/Faqs";
import Footerapp from "./components/Footerapp";
const Home = ({ setCartItemCount, cartItemCount }) => {
  return (
    <>
      <Navbar
        setCartItemCount={setCartItemCount}
        cartItemCount={cartItemCount}
      />
      <Hero />
      <ProductSlider />
      <AboutUs />
      <SwiperProduct />
      <Pricingsection />
      <Faqs />
      <Footerapp />
    </>
  );
};

export default Home;
