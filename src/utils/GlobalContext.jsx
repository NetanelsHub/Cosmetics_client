import { createContext, useState, useEffect } from "react";
// import axios from "axios";

export const globalContext = createContext()

function GlobalProvider({ children }) {
const [categoryName, setCategoryName] = useState("")

  const value = {
    setCategoryName,
    categoryName
  }

  return (
    <globalContext.Provider value={value}>
      {children}
    </globalContext.Provider>
  );
}
export default GlobalProvider
