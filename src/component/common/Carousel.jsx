import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import DiscountWatermark from "./DiscountMark";

const url = "http://localhost:3000/products/getAllProducts";

export default function Carousel() {
  const [discountProducts, setDiscountProducts] = useState([]);

  async function getProductByDiscount() {
    try {
      const { data } = await axios.get(url, {
        withCredentials: true,
      });

      if (!data || !data.products) throw new Error("There are no products");
      setDiscountProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProductByDiscount();
  }, []);

  useEffect(() => {
    console.log("Discount Products:", discountProducts);
  }, [discountProducts]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-4/5 h-[35vh] mx-auto">
      <Slider {...settings}>
        {discountProducts.map((product, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-4"
          >
            <div className="relative flex items-center justify-center w-full h-40">
              <DiscountWatermark discount={20} />
              <img
                className="w-40 h-40 object-contain"
                src={product.product_image}
                alt={product.product_name}
              />
            </div>
            <h3 className="text-center text-m font-semibold text-customGold h-16 flex justify-center items-center">
              <span>{product.product_name}</span>
              <span className="invisible">.</span>
            </h3>
            <div className="flex justify-center items-center gap-10 m-4">
              <span className="text-center text-gray-600">
                  {Math.round(product.product_price * 0.8)} $
              </span>
              <button className="text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-customGold dark:focus:ring-blue-800">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
