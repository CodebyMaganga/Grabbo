import React from "react";
import Carouselad from "./components/Carouselad";
import ItemCard from "./components/ItemCard";
import Navbar from "./Navbar";

const Menu = ({ handleClick, cartItems }) => {
  return (
    <>
      <Navbar />
      <Carouselad handleClick={handleClick} cartItems={cartItems} />
      <ItemCard handleClick={handleClick} cartItems={cartItems} />
    </>
  );
};

export default Menu;
