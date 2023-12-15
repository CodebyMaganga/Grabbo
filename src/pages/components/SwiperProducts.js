import React, { Component } from "react";
import Slider from "react-slick";
import "./Swipeproducts.css";
import GROCERIES from "../../products";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="mt-10">
        <h1 className="text-center text-xl py-10">Trending Products</h1>
        <Slider {...settings}>
          {GROCERIES.map((item) => (
            <div>
              <img src={item.url} alt="productAd" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.rating}</p>
              <button className="bg-barnRed text-white px-4 rounded-lg">
                Add To Cart
              </button>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
