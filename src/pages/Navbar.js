import React, { useState } from "react";
import Logo from "../images/logo(4).png";
import Hamburger from "../images/images.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="  flex flex-row justify-around items-center bg-applegreen">
      <div>
        <img className="w-auto h-20" src={Logo} alt="" />
      </div>
      <div>
        <div className="text-right md:hidden">
          <img
            onClick={() => setToggleMenu(!toggleMenu)}
            className="w-auto h-8"
            src={Hamburger}
            alt="menu-icon"
          />
        </div>
        {/*This is my Mobile Menu */}
        <div>
          <ul
            style={{
              display: toggleMenu ? "block" : "none",
              listStyle: "none",
            }}
            className="text-white"
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <Link to="/getstarted">
              <li>Get Started</li>
            </Link>
          </ul>
        </div>
        {/*This is my desktop menu */}
        <div>
          <ul className="flex flex-row text-white max-[800px]:hidden">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/menu">
              <li className="ml-4">Menu</li>
            </Link>
            <Link to="/getstarted">
              <li className="ml-4">Get Started</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
