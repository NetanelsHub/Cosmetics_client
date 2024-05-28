import React, { useContext, useState, useEffect } from "react";
import { globalContext } from "../utils/GlobalContext";
import axios from "axios";
import Card from "../component/common/Card";


const url = "http://localhost:3000/products/getProductsByCategory";
export default function CategoryCard() {

 
  const { categoryName , setProductsByCategory } = useContext(globalContext);

  async function getProductByCategory() {
    try {
      const { data } = await axios.get(`${url}?Search=${categoryName}`, {
        withCredentials: true,
      });
      if (!data) throw new Error("There is not Products");
      setProductsByCategory(data.productsByCategory);
      console.log(data);
    } catch (error) { }
  }

  useEffect(() => {
    if (categoryName) {
      getProductByCategory();
  
    }
  }, [categoryName]);


  return (
   <Card/>
  )
}




