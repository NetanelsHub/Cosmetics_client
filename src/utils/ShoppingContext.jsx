import { createContext, useState, useEffect } from "react";
// import axios from "axios";

export const shoppingContext = createContext()

function ShoppingProvider({ children }) {
    // array of product objet in shopping cart
    const [shoppingList, setShoppingList] = useState([])
    


    const value = {
        shoppingList,
        setShoppingList,
        

    }

    return (
        <shoppingContext.Provider value={value}>
            {children}
        </shoppingContext.Provider>
    );
}
export default ShoppingProvider
