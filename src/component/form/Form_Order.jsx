import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import FieldMy from "../common/FieldMy"


const validationSchema = Yup.object({
  client_phone: Yup.string().required("Phone number is required"),
  client_address: Yup.object({
    city: Yup.string().required("City is required"),
    street: Yup.string().required("Street is required"),
    building: Yup.string().required("Building is required"),
    apartment: Yup.string().required("Apartment is required"),
  }),
});

const initialValues = {
  client_fName: "John",
  client_lName: "Doe",
  client_email: "john.doe@example.com",
  total_price: 100,
  client_phone: "",
  client_address: {
    city: "",
    street: "",
    building: "",
    apartment: "",
  },
};

export default function OrderForm() {

  const handleSubmit = (values) => {
    console.log(values);
    // Add your form submission logic here
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Order Form
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-4 ">
              <FieldMy name="client_fName" type="text" placeholder="First Name" readOnly />
              <FieldMy name="client_lName" type="text" placeholder="Last Name" readOnly />
              <FieldMy name="client_email" type="email" placeholder="Email" readOnly />
              {/* <FieldMy name="total_price" type="number" placeholder="Total Price" readOnly /> */}
              <div className="mb-5 flex" >
                <PhoneInput
                  country={"il"}
                  value={values.client_phone}
                  onChange={(phone) => setFieldValue("client_phone", phone)}
                  inputProps={{
                    name: "client_phone",
                    required: true,
                    className: "border-b border-black p-2 dark:text-white dark:border-white w-full ",
                  }}
                />
                <ErrorMessage
                  className="text-red-600 text-sm"
                  name="client_phone"
                  component="div"
                />
              </div>
              <FieldMy name="client_address.city" type="text" placeholder="City" />
              <FieldMy name="client_address.street" type="text" placeholder="Street" />
              <FieldMy name="client_address.building" type="text" placeholder="Building" />
              <FieldMy name="client_address.apartment" type="text" placeholder="Apartment" />
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit Order
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}