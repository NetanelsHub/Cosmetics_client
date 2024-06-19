import React, { useContext } from "react";
import { shoppingContext } from "../../utils/ShoppingContext";

export default function Bill({ children }) {

    const { totalPrice } = useContext(shoppingContext); 
    const storedTotalPrice = sessionStorage?.getItem("totalPrice") || "";
    const stateTotalPrice =  totalPrice  || "";
    const finallyTotalPrice = stateTotalPrice || storedTotalPrice
    const tax = (finallyTotalPrice * 0.17).toFixed(2);
  
//   h-[10vh]
  return (
    // <div className="pt-4 pl-10 flex w-auto h-auto bg-gray-100 min-h-screen">
    <div className="w-full mt-2 h-[20vh] ">
      {/* <div className="flex "> */}
        <div className="w-full  p-2 border border-gray-300 rounded-lg shadow-md bg-white">
          <div className="flex justify-between mb-2">
            <h1 className="text-lg font-semibold text-gray-800">
              Total payment:
            </h1>
            <span className="text-lg font-semibold text-gray-800">
              {(totalPrice * 1).toFixed(2)}
            </span>
          </div>
          {/* <h2 className="text-md font-medium mb-1 text-gray-700">Subtotal</h2> */}

          <div className="flex justify-between mt-2 text-gray-700">
            <h3 className="text-md">Price:</h3>
            <span>${(totalPrice - tax).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <h3 className="text-md">Tax:</h3>
            <span>${tax}</span>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex justify-between mt-2 text-gray-800 font-semibold">
            <h3 className="text-md">Total:</h3>
            <span>${totalPrice}</span>
          </div>
        </div>
      {/* </div> */}
      {children}
    </div>
    // </div>
  );
}
