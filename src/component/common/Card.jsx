import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { globalContext } from "../../utils/GlobalContext";
import Model from "./Model";
import { Link ,useNavigate} from "react-router-dom";

const spinnerStyles = {
  borderTopColor: "#3498db",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  animation: "spinner 1.5s linear infinite",
};

const url = "http://localhost:3000/products/getProductsByCategory";

export default function Card() {
  const {
    productsByCategory,
    showModel,
    setShowModel,
    selectedProduct,
    setSelectedProduct,
    categoryName,
  } = useContext(globalContext);

  console.log("what is it:", productsByCategory[categoryName]);
  console.log("state:", productsByCategory);
  function openModel(product) {
    setShowModel(true);
    setSelectedProduct(product);
  }
  function handleCloseModel() {
    setShowModel(false);
    setSelectedProduct(null);
  }

  return (
    <div className="flex flex-wrap justify-center">
      <p className="hover:text-customGold text-xl">
        <Link to="/home"  className="fixed top-4 left-4 flex items-center hover:text-blue-500>back home"></Link>
      </p>
      {!productsByCategory[categoryName] ? (
        <div
          className="flex justify-center items-center"
          style={spinnerStyles}
        ></div>
      ) : (
        productsByCategory[categoryName].map((product, index) => (
          <div
            key={index}
            className="w-full mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"
          >
            <div className="relative flex justify-center items-center p-8 bg-white rounded-t-lg">
              <img
                className="w-32 h-32 object-contain"
                src={product.product_image}
                alt={product.product_name}
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={() => openModel(product)}
              >
                <FaSearch className="text-white text-3xl" />
              </div>
            </div>
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-customGold dark:text-customGold">
                {product.product_name}
              </h5>
              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.product_price}
                </span>
                <button className="text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      {showModel && selectedProduct && (
        <Model onClick={handleCloseModel}>
          <div className="flex items-center">
            <img
              className="w-40 h-40 object-contain "
              src={selectedProduct.product_image}
              alt={selectedProduct.product_name}
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-3xl font-bold mb-4 text-customGold">
                {selectedProduct.product_name}
              </h2>
              <p className="text-lg mb-4">
                {selectedProduct.product_description}
              </p>
              <span className="text-3xl font-bold">
                ${selectedProduct.product_price}
              </span>
            </div>
          </div>
        </Model>
      )}
    </div>
  );
}
