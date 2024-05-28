import React, { useContext, useState, useEffect } from "react";
import { globalContext } from "../utils/GlobalContext";
import axios from "axios";

const url = "http://localhost:3000/products/getProductsByCategory";
export default function CategoryCard() {

  const [productsByCategory, setProductsByCategory] = useState(null);
  const { categoryName } = useContext(globalContext);

  async function getProductByCategory() {
    try {
      const { data } = await axios.get(`${url}?Search=${categoryName}`, {
        withCredentials: true,
      });
      if (!data) throw new Error("There is not Products");
      setProductsByCategory(data.products);
      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    if (categoryName) {
      getProductByCategory();
    }
  }, [categoryName]);


  return (
  


    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
      </div>
    </div>)
}




