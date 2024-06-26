import React, { useContext, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldMy from "../component/common/FieldMy";
import { globalContext } from "../utils/GlobalContext";
import { shoppingContext } from "../utils/ShoppingContext";
import { useNavigate } from "react-router-dom";
import Bill from "../component/common/Bill";
import AutoComplete from "../component/common/AutoComplete";

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
  const { shoppingList, totalPrice, setPurchaseOrderInfo } = useContext(shoppingContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState({ city: "", street: "", building: "" });
  const [phone, setPhone] = useState("");
  const [apartment, setApartment] = useState("");

  const storedClientInfo = JSON.parse(sessionStorage.getItem("clientInfo")) || {};

  useEffect(() => {
    const storedPhone = sessionStorage.getItem("client_phone") || "";
    const storedApartment = sessionStorage.getItem("client_address.apartment") || "";
    const storedAddress = JSON.parse(sessionStorage.getItem("client_address")) || { city: "", street: "", building: "" };

    setPhone(storedPhone);
    setApartment(storedApartment);
    setAddress(storedAddress);
  }, []);

  const initialValues = {
    client_fName: clientInfo?.client_fName || storedClientInfo?.client_fName || "",
    client_lName: clientInfo?.client_lName || storedClientInfo?.client_lName || "",
    client_email: clientInfo?.client_email || storedClientInfo?.client_email || "",
    total_price: totalPrice,
    client_phone: phone,
    client_address: {
      city: address.city || "",
      street: address.street || "",
      building: address.building || "",
      apartment: apartment,
    },
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setPhone(value);
    sessionStorage.setItem("client_phone", value);
  };

  const handleApartmentChange = (event) => {
    const { value } = event.target;
    setApartment(value);
    sessionStorage.setItem("client_address.apartment", value);
  };

  const handlePlaceSelected = (place) => {
    setAddress(place);
    sessionStorage.setItem("client_address", JSON.stringify(place));
  };

  function handleSubmitPurchaseInfo(values) {
    const order = {
      clientId: clientInfo?._id || storedClientInfo?.client_id,
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
      status: 0,
    };
    setPurchaseOrderInfo(order);
    navigate("payment");
  }

  return (
    <div className="mt-6 mb-6 w-auto h-auto min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl h-auto flex flex-col p-8 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-12">
          <Bill />
        </div>
        <div className="flex-grow overflow-auto">
          <h2 className="mb-6 mt-4 text-xl font-bold leading-tight tracking-tight text-customGold">
            Shipping information
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitPurchaseInfo}
            enableReinitialize
          >
            <Form className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1 space-y-6">
                  <FieldMy
                    name="client_fName"
                    type="text"
                    placeholder="*First Name"
                    readOnly
                    className="bg-gray-200 cursor-not-allowed"
                  />
                  <FieldMy
                    name="client_lName"
                    type="text"
                    placeholder="*Last Name"
                    readOnly
                    className="bg-gray-200 cursor-not-allowed"
                  />
                  <FieldMy
                    name="client_email"
                    type="email"
                    placeholder="*Email"
                    readOnly
                    className="bg-gray-200 cursor-not-allowed"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <FieldMy
                    name="client_phone"
                    type="tel"
                    placeholder="*Phone"
                    className="bg-gray-100 p-2.5 border border-gray-300 rounded-lg"
                    onChange={handlePhoneChange}
                  />
                  <AutoComplete onPlaceSelected={handlePlaceSelected} />
                  <FieldMy
                    name="client_address.apartment"
                    type="text"
                    placeholder="*Apartment"
                    className="bg-gray-100 p-2.5 border border-gray-300 rounded-lg"
                    onChange={handleApartmentChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full ml-auto text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Proceed to payment
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
