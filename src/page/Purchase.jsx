import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldMy from "../component/common/FiledMy";
import { globalContext } from "../utils/GlobalContext";
import { shoppingContext } from "../utils/ShoppingContext";
import {useNavigate}  from "react-router-dom"

// import axios from "axios";
// import Paypal from "../component/common/Paypal";
// import "react-phone-input-2/lib/style.css";
// import PhoneInput from "react-phone-input-2";

const url = "http://localhost:3000/orders";



const validationSchema = Yup.object({
  client_phone: Yup.string().required("Phone number is required"),
  client_address: Yup.object({
    city: Yup.string().required("City is required"),
    street: Yup.string().required("Street is required"),
    building: Yup.string().required("Building is required"),
    apartment: Yup.string().required("Apartment is required"),
  }),
});

export default function Purchase() {
  const { clientInfo } = useContext(globalContext);
  const { shoppingList, totalPrice ,setPurchaseOrderInfo} = useContext(shoppingContext);
  const navigate = useNavigate()
 
  /*
   if user did refresh i take the info from sessionStorage
   because on refresh all my sate its null and i get error
    */
  const storedClientInfo = JSON.parse(sessionStorage.getItem("clientInfo")) || {};
  console.log(storedClientInfo.client_fName)

  const initialValues = {
    client_fName: clientInfo?.client_fName ? clientInfo.client_fName :storedClientInfo?.client_fName  ,
    client_lName: clientInfo?.client_lName ? clientInfo.client_lName :storedClientInfo?.client_lName ,
    client_email: clientInfo?.client_email ? clientInfo.client_email :storedClientInfo?.client_email  ,
    total_price: totalPrice ,
    client_phone: "",
    client_address: {
      city: "",
      street: "",
      building: "",
      apartment: "",
    },
  };
  
  
function handleSubmitPurchaseInfo (values){
  // sessionStorage.setItem('clientInfo', JSON.stringify(values));

  // get the info in state
    const order = {
      clientId: clientInfo._id, 
      client_details: {
        client_phone: values.client_phone,
        client_address: {
          city: values.client_address.city,
          street: values.client_address.street,
          building: values.client_address.building,
          apartment: values.client_address.apartment,
        },
      },
      total_price: totalPrice,
      products: shoppingList.map((val) => ({
        productId: val._id,
        RTP: val.product_price,
        quantity: val.quantity,
      })),
     
      status: 1,
    };
  // save all order info 
  setPurchaseOrderInfo(order)
  //navigate to payment
  navigate("payment")
}
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white ">
          Total price: {initialValues.total_price} $
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitPurchaseInfo}
        >
          {/* {({ values, setFieldValue }) => ( */}
          <Form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 space-y-4">
                <FieldMy
                  name="client_fName"
                  type="text"
                  placeholder="*First Name"
                  // readOnly
                />
                <FieldMy
                  name="client_lName"
                  type="text"
                  placeholder="*Last Name"
                  readOnly
                />
                <FieldMy
                  name="client_email"
                  type="email"
                  placeholder="*Email"
                  readOnly
                />
                <FieldMy
                  name="client_phone"
                  type="phone"
                  placeholder="*phone"
                />
                {/* <div className="mb-5"> */}
                  {/* <PhoneInput
                      country={"il"}
                //    value={values.client_phone}
                      onChange={(phone) => setFieldValue("client_phone", phone)}
                      inputProps={{
                        name: "client_phone",
                        required: true,
                        className: "pl-9 border-b border-black p-2 dark:text-white dark:border-white",
                      }}
                    />
                    <ErrorMessage
                      className="text-red-600 text-sm"
                      name="client_phone"
                      component="div"
                    /> */}
                {/* </div> */}
              </div>
              <div className="flex-1 space-y-4">
                <FieldMy
                  name="client_address.city"
                  type="text"
                  placeholder="*City"
                />
                <FieldMy
                  name="client_address.street"
                  type="text"
                  placeholder="*Street"
                />
                <FieldMy
                  name="client_address.building"
                  type="text"
                  placeholder="*Building"
                />
                <FieldMy
                  name="client_address.apartment"
                  type="text"
                  placeholder="*Apartment"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit Order
            </button>
          </Form>
        </Formik>
        {/* <Paypal /> */}
      </div>
    </section>
  );
}



// async function handleSubmitOrder(values) {
  
  //   // this what i need to send to server
  //   const order = {
  //     clientId: clientInfo._id, // Replace with actual client ID
  //     client_details: {
  //       client_phone: values.client_phone,
  //       client_address: {
  //         city: values.client_address.city,
  //         street: values.client_address.street,
  //         building: values.client_address.building,
  //         apartment: values.client_address.apartment,
  //       },
  //     },
  //     total_price: totalPrice,
  //     products: shoppingList.map((val) => ({
  //       productId: val._id,
  //       RTP: val.product_price,
  //       quantity: val.quantity,
  //     })),
     
  //     status: 1,
  //   };
  //   console.log(order);

  //       try {
  //         const { data } = await axios.post(`${url}/addOrder`, order, {
  //           withCredentials: true,
  //         });
  //         // return data
  //       } catch (error) {
  //         // console.error("An error occurred while adding the product:", error);
  //       }
  // }