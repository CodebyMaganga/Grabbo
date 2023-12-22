import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

const Cart = ({ cartItems, setCartItems }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleAdd = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (!item.amount) {
          item.amount = 1; // Initialize amount to 1 if it doesn't exist
        } else {
          item.amount += 1; // Increment the item amount by 1
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleSubtract = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.amount > 1) {
        item.amount -= 1; // Decrement the item amount by 1 if it's greater than 1
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handlePrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      console.log("Item:", item); // Log the item to see its structure and values
      totalPrice += item.amount * item.price; // Multiply the item price by its amount
    });
    console.log("Total Price:", totalPrice); // Log the total price to check its value
    setPrice(totalPrice);
  };

  useEffect(() => {
    handlePrice();
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <h2 className="text-center">Shopping Cart</h2>
      <div className="grid ">
        {cartItems.map((item) => (
          <div
            className="grid grid-flow-row grid-cols-6 place-items-center my-10 border-2"
            key={item.id}
          >
            <div className="flex flex-row items-center col-span-4">
              <img
                className="h-[10rem] w-auto"
                src={item.url}
                alt={item.name}
              />
              <p className="mx-10">{item.name}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <button
                className="bg-barnRed h-[40px] px-4 rounded-full text-white"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
              <button
                className="bg-oldgold h-[40px] w-[30px] px-2 ml-4 rounded-full"
                onClick={() => handleSubtract(item.id)}
              >
                - {/* This is an example of removing an item */}
              </button>

              <button
                className="bg-oldgold h-[40px] w-[30px] px-2 ml-4 rounded-2xl"
                onClick={() => handleAdd()}
              >
                + {/* This is an example of adding an item */}
              </button>
            </div>
          </div>
        ))}
      </div>
      <p>Total Price: {price}</p>
    </>
  );
};

export default Cart;
