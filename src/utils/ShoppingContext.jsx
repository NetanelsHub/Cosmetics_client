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
   // set the total price of product
   const[totalPrice,setTotalPrice] = useState(0)

    const value = {
        shoppingList,
        setShoppingList,
        showModelProduct,
        setShowModelProduct,
        showModelCart,
        setShowModelCart,
        totalPrice,
        setTotalPrice


    }

    return (
        <shoppingContext.Provider value={value}>
            {children}
        </shoppingContext.Provider>
    );
}
export default ShoppingProvider
