import React, { useContext, useState, useEffect } from "react";
import { globalContext } from "../utils/GlobalContext";
import axios from "axios";
import Card from "../component/common/Card";

const url = "http://localhost:3000/products/getProductsByCategory";

export default function CategoryCard() {
  const { categoryName, setProductsByCategory, productsByCategory } =
    useContext(globalContext);

  // isFetch - checked if we already send request to the server by this category product
  const isFetch = !productsByCategory[categoryName];

  //data.productsByCategory

  async function getProductByCategory() {
    
    try {
      if (isFetch) {
        const { data } = await axios.get(`${url}?Search=${categoryName}`, {
          withCredentials: true,
        });
        if (!data) throw new Error("There is not Products");

        setProductsByCategory((prevDate) => ({
          ...prevDate,
          [categoryName]: data.productsByCategory,
        }));

        // console.log(productsByCategory);
        // console.log(data)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getProductByCategory();
  }, [categoryName]);

  return (
    <>
      <Card />
    </>
  );
}


