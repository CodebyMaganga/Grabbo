import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

const Cart = ({ cartItems, setCartItems }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleAdd = (id) => {
    console.log("add");
  };

  const handlePrice = () => {
    let ans = 0;
    cartItems.forEach((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <h2 className="text-center">Cart</h2>
      <div className="flex flex-row px-10 justify-around">
        {cartItems.map((item) => (
          <div key={item.id}>
            <img className="h-[10rem] w-auto" src={item.url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              className="bg-oldgold px-2 mr-2 rounded-full"
              onClick={() => handleAdd()}
            >
              + {/* This is an example of adding an item */}
            </button>
            <button
              className="bg-oldgold px-2 mr-2 rounded-full"
              onClick={() => handleRemove(item.id)}
            >
              - {/* This is an example of removing an item */}
            </button>
            <button
              className="bg-barnRed px-4 rounded-full text-white"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <p>Total Price: {price}</p>
    </>
  );
};

export default Cart;
