import React, { createContext, useState, useEffect } from 'react';
import ShoppingProvider from './ShoppingContext'; // Correct import statement

export const globalContext = createContext();

function GlobalProvider({ children }) {
  const [categoryName, setCategoryName] = useState('');
  const [productsByCategory, setProductsByCategory] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModel, setShowModel] = useState(false);

  // side bar for profile
  /* when i click profile  --> login --> showModel -> form,
  if i use in my show model and i am in category its will be open a
  another show model of product info  to avoid it i need another show model state
  */
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)

  // to know if client on login if its false == on register
  const [isLogIn, setIsLogIn] = useState(true)

  // show model -  login form
  const [showModelProfile, setShowModelProfile] = useState(false)

  // set client name to show it on upper nav bar
  const [clientName, setClientName] = useState(null)
  // get the user info when he login 
  const[clientInfo ,setClientInfo] = useState ()

  const value = {
    setCategoryName,
    categoryName,
    productsByCategory,
    setProductsByCategory,
    showModel,
    setShowModel,
    selectedProduct,
    setSelectedProduct,
    showDropdownMenu,
    setShowDropdownMenu,
    isLogIn,
    setIsLogIn,
    showModelProfile,
    setShowModelProfile,
    clientName,
    setClientName,
    clientInfo ,
    setClientInfo
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
