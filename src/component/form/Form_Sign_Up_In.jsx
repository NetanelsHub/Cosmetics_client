import React, { useContext, useState } from "react";
import Model from "../common/Model";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { globalContext } from "../../utils/GlobalContext";
import { shoppingContext } from '../../utils/ShoppingContext';
import FieldMy from "../common/FieldMy";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  client_email: "",
  client_password: "",
  client_fName: "",
  client_lName: "",
};

// login
const url = "http://localhost:3000/client";
const googleUrl = "https://www.googleapis.com/oauth2/v3/userinfo";

export default function Form_Sign_Up_In() {
  const {
    showModelProfile,
    setShowModelProfile,
    setIsLogIn,
    isLogIn,
    setClientName,
    setClientInfo,
    clientInfo
  } = useContext(globalContext);
  const { setShowModelCart } = useContext(shoppingContext);

  const navigate = useNavigate();

  const objectSchema = Yup.object({
    client_email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    client_password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .max(12, "Password can't be greater than 12 characters")
      .matches(
        /^(?=.[a-z])(?=.[A-Z]).*$/,
        "Password must contain at least one lowercase letter and one uppercase letter"
      )
      .required("Password is required"),
    ...(isLogIn
      ? {}
      : {
          client_fName: Yup.string().required("First Name is required"),
          client_lName: Yup.string().required("Last Name is required"),
          termsAgreed: Yup.boolean()
            .oneOf([true], "You must accept the Terms and Conditions")
            .required("You must accept the Terms and Conditions")
        }),
  });

  function handleCloseModel() {
    setShowModelProfile(false);
  }

  // handle login and register for regular submit
  function handleSubmit(values) {
    if (isLogIn) {
      loginClient(values);
    } else {
      addClient(values);
    }
  }

  // add request for server
  async function loginClient(values) {
    try {
      const { data } = await axios.post(`${url}/login`, values, {
        withCredentials: true,
      });
      console.log("Client info: ", data);
      if (!data.success) throw new Error("Login failed");
      // need to add to state client name to show it on upper nav bar
      setClientName(data.client.client_fName);
      setClientInfo(data.client);
      /*
      save client info in sessionStorage so when they refresh on purchase they will not get an error
      and I can get their info (less risk)
      */
      const { client_fName, client_lName, client_email, _id } = data.client;
      sessionStorage.setItem("clientInfo", JSON.stringify({
        client_fName, client_lName, client_email, _id
      }));

      if (data.success && sessionStorage.getItem("checkOut") === "true") {
        console.log("in before");
        setShowModelCart(false);
        navigate("/purchase");
        sessionStorage.removeItem("checkOut");
        console.log("in");
      } 
      setShowModelProfile(false);

    } catch (error) {
      console.log("Error logging in:", error);
    }
  }

  // add new client
  async function addClient(values) {
    try {
      const data = await axios.post(`${url}/register`, values, {
        withCredentials: true,
      });
      /*
      save client info in sessionStorage so when they refresh on purchase they will not get an error
      and I can get their info (less risk)
      */
      sessionStorage.setItem("clientInfo", JSON.stringify(values));
      // after client registers I want them to see the login
      // need to set the isLogIn to true
      setIsLogIn(true);
    } catch (error) {
      console.error("An error occurred while registering:", error);
    }
  }

  const loginFromGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const { data } = await axios.get(googleUrl, {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        const clientInfoFromGoogle = {
          client_email: data.email,
          client_password: data.sub,
          ...(isLogIn
            ? {}
            : {
                client_fName: data.given_name,
                client_lName: data.family_name,
              }),
        };

        if (isLogIn) {
          loginClient(clientInfoFromGoogle);
        } else {
          addClient(clientInfoFromGoogle);
        }

      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Model onClick={handleCloseModel} show={showModelProfile}>
      <Formik
        initialValues={initialValues}
        validationSchema={objectSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogIn ? "Log in" : "Register"}
          </h2>
          {/* {console.log("isLogin:", isLogIn)} */}
          {!isLogIn && (
            <>
              <FieldMy name="client_fName" placeholder="*First Name" />
              <FieldMy name="client_lName" placeholder="*Last Name" />
            </>
          )}
          <FieldMy name="client_email" placeholder="*Email" type="email" />
          <FieldMy name="client_password" placeholder="*Password" type="password" />
          {isLogIn ? (
            <div className="mb-4 text-center">
              <Link
                to="ForgotPassword"
                className="text-sm text-blue-500 hover:text-blue-800"
                onClick={handleCloseModel}
              >
                Forgot Password?
              </Link>
            </div>
          ) : (
            <div className="mb-4">
              <Field type="checkbox" name="termsAgreed" className="mr-2" />
              <label htmlFor="termsAgreed" className="text-sm">
                I agree to the{" "}
                <a
                  href="termsAndConditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Terms and Conditions
                </a>
              </label>
              <ErrorMessage name="termsAgreed" component="div" className="text-red-500 text-sm mt-2" />
              <button
                className="text-sm text-gray-900 mt-2"
                onClick={() => setIsLogIn(true)}
              >
                If you already have an account
              </button>
            </div>
          )}
          {isLogIn && (
            <div className="mb-4 text-center">
              <button
                className="text-sm text-gray-900"
                onClick={() => setIsLogIn(false)}
              >
                For register click here.
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={loginFromGoogle}
            className="w-full flex items-center justify-center text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4"
          >
            <FcGoogle className="mr-2" size={25} />
            {`${isLogIn ? "Login" : "Register"} with Google`}
          </button>
          <button
            type="submit"
            className="w-full text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </Model>
  );
}