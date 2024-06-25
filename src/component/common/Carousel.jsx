import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import DiscountWatermark from "./DiscountMark";
import { shoppingContext } from "../../utils/ShoppingContext";
import { useInView } from "react-intersection-observer";

const url = "http://localhost:3000/products/";

export default function Carousel({ endPoint }) {
  const [discountProducts, setDiscountProducts] = useState([]);
  const { shoppingList, setShoppingList } = useContext(shoppingContext);
  const { ref, inView } = useInView({ triggerOnce: true });

  async function getProductByDiscount() {
    try {
      const { data } = await axios.get(`${url}${endPoint}`, {
        withCredentials: true,
      });
      if (!data || !data.products) throw new Error("There are no products");
      setDiscountProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    if (inView) {
      getProductByDiscount();
    }
  }, [inView]);

  function handleAddToCartHome(product, index) {
    const inList = shoppingList.some((val) => val._id === product._id);
    if (!inList) {
      const productAndQuantity = { ...product, quantity: 1 };
      setShoppingList([...shoppingList, productAndQuantity]);
    } else {
      const updatedList = [...shoppingList];
      const item = updatedList[index];
      item.quantity += 1;
      setShoppingList(updatedList);
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 30000,
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
    <div className="w-4/5 h-[35vh] mx-auto mb-40" ref={ref}>
      {inView && (
        <Slider {...settings}>
          {discountProducts.map((product, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-4"
            >
              <div className="relative flex items-center justify-center w-full h-40">
                {endPoint === "discounted" && (
                  <DiscountWatermark discount={product.product_discount} />
                )}
                <img
                  className="w-40 h-40 object-contain"
                  src={product.product_image}
                  alt={product.product_name}
                />
              </div>
              <h3 className="text-center text-m font-semibold text-black h-16 flex justify-center items-center">
                <span>{product.product_name}</span>
                <span className="invisible">.</span>
              </h3>
              <div className="flex justify-center items-center gap-10 m-4">
                <span className="text-center text-gray-600">
                  {product.product_price} $
                </span>
                <button
                  className="text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-customGold dark:focus:ring-blue-800"
                  onClick={() => handleAddToCartHome(product, index)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
