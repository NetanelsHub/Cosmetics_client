import { createContext, useState, useEffect } from "react";
// import axios from "axios";

export const shoppingContext = createContext()

function ShoppingProvider({ children }) {
    // array of product objet in shopping cart
    const [shoppingList, setShoppingList] = useState([])
    // show the model - info of the product
    const [showModelProduct, setShowModelProduct] = useState(false)
    // show the model - shopping cart
    const [showModelCart, setShowModelCart] = useState(false)


    const value = {
        shoppingList,
        setShoppingList,
        showModelProduct,
        setShowModelProduct,
        showModelCart,
        setShowModelCart


    }

    return (
        <shoppingContext.Provider value={value}>
            {children}
        </shoppingContext.Provider>
    );
}
export default ShoppingProvider
