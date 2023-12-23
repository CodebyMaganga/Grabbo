import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/components/cart";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleClick = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem === item);

    if (existingItem) {
      handleChange(existingItem, 1);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleChange = (item, d) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem === item) {
        const updatedAmount = cartItem.price + d;

        return {
          ...cartItem,

          amount: updatedAmount > 0 ? updatedAmount : 1,
        };
      }

      return cartItem;
    });

    setCartItems(updatedCartItems);

    setCartItemCount(
      updatedCartItems.reduce((total, cartItem) => total + cartItem.amount, 0)
    );
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleClick={handleClick}
              cartItems={cartItems}
              setCartItemCount={setCartItemCount}
              cartItemCount={cartItemCount}
            />
          }
        />
        <Route
          path="/menu"
          element={<Menu handleClick={handleClick} cartItems={cartItems} />}
        />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
