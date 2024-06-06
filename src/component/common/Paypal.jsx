import React, { useContext } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { shoppingContext } from "../../utils/ShoppingContext";

function Paypal() {
  const { purchaseOrderInfo } = useContext(shoppingContext);

  const createOrder = async (data) => {
    // Order is created on the server and the order id is returned
    const response = await axios({
      url: "http://localhost:3000/payment/create-order",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // data:JSON.stringify({cart})
    });
    console.log(response.data);
    return response.data.orderId;
  };

  const onApprove = async (data) => {
    try {
        // Send the order ID and purchaseOrderInfo to your server
        const response = await axios.post("http://localhost:3000/payment/complete-order", {
            orderId: data.orderID,
            purchaseOrderInfo: purchaseOrderInfo
        });
        console.log(response.data.status);

        return response.data;
    } catch (error) {
        console.error("Error completing order:", error);
        // Handle errors
    }
};

  return (
    <div className="flex justify-center items-center w-full text-white">
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  );
}

export default Paypal;

// const onApprove = async (data) => {
//   console.log(data);
//   // Order is captured on the server and the response is returned to the browser
// const response = await axios({
//     url: "http://localhost:3000/payment/complete-order",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: JSON.stringify({ orderId: data.orderID }),
//   });
//   console.log(response)
//   console.log(response.data.status)
//   return response.data;
// };