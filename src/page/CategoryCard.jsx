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
        console.log("categoryName:" , categoryName)
        const { data } = await axios.get(`${url}?Search=${categoryName? categoryName: localStorage.getItem("category") }`, {
          withCredentials: true,
        });
        if (!data) throw new Error("There is not Products");

        setProductsByCategory((prevDate) => ({
          ...prevDate,
          [categoryName]: data.productsByCategory,
        }));
        
        /* 
        problem : after we do refresh the categoryName its null.!
        solution :to avoid it on the 1st time when categoryName its not null
        we insert the categoryName inside the local storage  than when user 
        refresh its will take the categoryName from local storage
        and want change the local storage any more because  the category name 
        is null
         */
       if (categoryName){
       localStorage.setItem("category",categoryName)}
        
      }
    } catch (error) {
      
    }
   
  }

  useEffect(() => {
    getProductByCategory();
    // localStorage.setItem("category",categoryName)

  }, [categoryName]);

  return (
    <>
      <Card />
    </>
  );
}


