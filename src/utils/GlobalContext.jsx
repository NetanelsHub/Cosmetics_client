import { createContext, useState, useEffect } from "react";
// import axios from "axios";

export const globalContext = createContext()

function GlobalProvider({ children }) {

  const [categoryName, setCategoryName] = useState("")
  const [productsByCategory, setProductsByCategory] = useState(null)
  const[selectedProduct,setSelectedProduct] = useState(null)

  const [showModel, setShowModel] = useState(false)

  const value = {
    setCategoryName,
    categoryName,
    productsByCategory,
    setProductsByCategory,
    showModel,
    setShowModel,
    selectedProduct,
    setSelectedProduct
  }

  return (
    <globalContext.Provider value={value}>
      {children}
    </globalContext.Provider>
  );
}
export default GlobalProvider
