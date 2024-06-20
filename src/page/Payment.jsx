import React, { useContext, useState } from 'react';
import { shoppingContext } from '..//utils/ShoppingContext'
import { FiPlus, FiMinus } from 'react-icons/fi';
import Paypal from "../component/common/Paypal"
// import Bill from '../component/common/Bill';

export default function Payment() {
    const { purchaseOrderInfo, shoppingList } = useContext(shoppingContext);
    const [isExpanded, setIsExpanded] = useState(false);
    

    const storedTotalPrice = sessionStorage?.getItem("totalPrice") || "";
    const stateTotalPrice = purchaseOrderInfo?.total_price || "";
   
    const finallyTotalPrice = stateTotalPrice || storedTotalPrice
  
    const tax = (finallyTotalPrice * 0.17).toFixed(2);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="pt-4 pl-10 flex flex-col w-full bg-gray-100 min-h-screen">
            <h1 className="text-center mb-4 text-2xl font-bold text-customGold">Cash Register</h1>
            <div className="flex flex-wrap">
                {/* Left Side - Bill */}
                <div className="w-full lg:w-1/2 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="flex justify-between mb-2">
                        <h1 className="text-lg font-semibold text-gray-800">Total payment:</h1>
                        <span className="text-lg font-semibold text-gray-800">$
                            {(finallyTotalPrice *1).toFixed(2)}
                        </span>
                    </div>
                    <h2 className="text-md font-medium mb-1 text-gray-700">Subtotal</h2>

                    <div className="flex justify-between items-center cursor-pointer text-gray-700 mb-2" onClick={toggleExpand}>
                        <h2 className="text-md font-medium">Order details</h2>
                        {isExpanded ? <FiMinus className="text-customGold" /> : <FiPlus className="text-customGold" />}
                    </div>
                    {isExpanded && (
                        <div className="mt-2 text-gray-600">
                            {shoppingList.map((val, index) => (
                                <div key={index} className="flex items-center mb-4">
                                    <img
                                        className="w-20 h-20 object-contain"
                                        src={val?.product_image}
                                        alt={val?.product_name}
                                    />
                                    <div className="flex flex-col ml-4">
                                        <h2 className="text-s font-bold text-customGold">
                                            {val?.product_name}
                                        </h2>
                                        <span className="text-s font-bold">
                                            price: ${val?.product_price}
                                        </span>
                                        <span className="text-s font-bold">
                                            quantity: {val.quantity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-between mt-2 text-gray-700">
                        <h3 className="text-md">Price:</h3>
                        <span>${(finallyTotalPrice - tax).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <h3 className="text-md">Tax:</h3>
                        <span>${tax}</span>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className="flex justify-between mt-2 text-gray-800 font-semibold">
                        <h3 className="text-md">Total:</h3>
                        <span>${finallyTotalPrice}</span>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="flex justify-between">
                        <h1 className="text-lg font-semibold text-gray-800">LET'S CHECKOUT</h1>
                        <Paypal/>
                    </div>
                    {/* Add future content here */}
                </div>
            </div>
            
        </div>
    );
}
