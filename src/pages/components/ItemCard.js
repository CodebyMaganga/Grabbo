"use client";

import { Card } from "flowbite-react";
import { useState } from "react";
//import { useState, useEffect } from "react";
import ITEMS from "../../Items";
//import { BASE_URL } from "../../utils";

function ItemCard({ handleClick }) {
  /*
  const [productlist, setProductlist] = useState([]);

  console.log(BASE_URL);

  useEffect(() => {
    fetch(BASE_URL + "/products")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setProductlist(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  });
  */
  const [data, setData] = useState(ITEMS);

  const filterItems = (category) => {
    const result = ITEMS.filter((product) => product.category === category);
    setData(result);
    return result;
  };
  return (
    <>
      <div className="bg-smokyblack text-white h-12 flex flex-row justify-center items-end mt-20">
        <h1>Fresh Produce</h1>
      </div>
      <div className="button-container flex flex-row justify-center">
        <div>
          <button
            onClick={() => setData(ITEMS)}
            className="bg-blackbean text-white px-6 rounded-full mr-4 mt-2"
          >
            All
          </button>
        </div>

        <div>
          <button
            onClick={() => filterItems("Vegetables")}
            className="bg-blackbean text-white px-6 rounded-full mr-4 mt-2"
          >
            Vegetables
          </button>
        </div>
        <div>
          <button
            onClick={() => filterItems("Fruits")}
            className="bg-blackbean text-white px-6 rounded-full mr-4 mt-2"
          >
            Fruits
          </button>
        </div>
        <div>
          <button
            onClick={() => filterItems("Animal Products")}
            className="bg-blackbean text-white px-6 rounded-full mr-4 mt-2"
          >
            Animal Products
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-around mt-10">
        {data.map((item) => (
          <Card
            key={item.id}
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={item.url}
          >
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
            </a>
            <div className="mb-5 mt-2.5 flex items-center">
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {item.price}
              </span>
              <button
                href="#"
                className="rounded-lg mb-2 mr-2 bg-barnRed px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                onClick={() => handleClick(item)}
              >
                Add to cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
export default ItemCard;
