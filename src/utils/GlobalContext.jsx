import React, { createContext, useState, useEffect } from 'react';
import ShoppingProvider from './ShoppingContext'; // Correct import statement

export const globalContext = createContext();

function GlobalProvider({ children }) {
  const [categoryName, setCategoryName] = useState('');
  const [productsByCategory, setProductsByCategory] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const value = {
    setCategoryName,
    categoryName,
    productsByCategory,
    setProductsByCategory,
    showModel,
    setShowModel,
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <globalContext.Provider value={value}>
      <ShoppingProvider> 
        {children}
      </ShoppingProvider>
    </globalContext.Provider>
  );
}

export default GlobalProvider;
