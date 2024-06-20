import React, { useContext, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { shoppingContext } from "../../utils/ShoppingContext";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/orders/addOrder";

function Paypal() {
  const { purchaseOrderInfo } = useContext(shoppingContext);
  console.log("total price is:",purchaseOrderInfo.total_price);
  const navigate = useNavigate()

  const createOrder = async (data) => {
    // Order is created on the server and the order id is returned
    const response = await axios({
      url: "http://localhost:3000/payment/create-order",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        total_price: purchaseOrderInfo.total_price.toString(),
      },
      // data:JSON.stringify({cart})
    });
    // console.log(response.data);

    return response.data.orderId;
  };

  const onApprove = async (data) => {
    try {
      console.log("1");
      // Send the order ID and purchaseOrderInfo to your server
      const response = await axios.post(
        "http://localhost:3000/payment/complete-order",
        {
          orderId: data.orderID,
          // purchaseOrderInfo:purchaseOrderInfo// add
        }
      );

      console.log(response.data.status);

      // after i get the client pay i  insert it to db
      if (response.data.status === "COMPLETED") {
        console.log("Payment process is complete.");

        await addOrderDb();
        navigate("tankYou")
      } else {
        console.log("Payment was not completed successfully.");
        // Handle non-completed payment cases
      }

      return response.data;
    } catch (error) {
      console.error("Error completing order:", error);
      // Handle errors
    }
  };

  async function addOrderDb() {
    try {
      console.log(" iam in add order");
      const { data } = await axios.post(url, purchaseOrderInfo, {
        withCredentials: true,
      });
      console.log("Order added to database successfully.");
      return data;
    } catch (error) {
      // console.error("An error occurred while adding the product:", error);
    }
  }

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
