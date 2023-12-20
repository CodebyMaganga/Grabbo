import React, { Component } from "react";
import Slider from "react-slick";
import ADS from "../../Ads";

export default class Responsive extends Component {
  render() {
    const { handleClick } = this.props;

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="bg-smokyblack text-white h-12 flex flex-row justify-center items-end ">
          <h1 className=" text-xl">Festive offers</h1>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {ADS.map((item) => (
              <div>
                <img
                  className="h-[20rem] w-auto "
                  src={item.url}
                  alt="adProduct"
                />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="rounded-lg mt-4 mb-2 mr-2 bg-barnRed px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
