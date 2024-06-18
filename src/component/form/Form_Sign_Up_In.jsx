import React, { useContext, useState } from "react";
import Model from "../common/Model";
import { Formik, Form ,Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import { globalContext } from "../../utils/GlobalContext";
import  { shoppingContext } from '../../utils/ShoppingContext'

import FieldMy from "../common/FiledMy";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { Link,useNavigate} from "react-router-dom";



const initialValues = {
  client_email: "",
  client_password: "",
  client_fName: "",
  client_lName: "",
};

///login
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
const {setShowModelCart } = useContext(shoppingContext)


    const navigate  = useNavigate()

  const objectSchema = Yup.object({
    client_email: Yup.string()
      .email("email must be valid email")
      .required("Email is Required"),
    client_password: Yup.string()
      .min(5, "password must be at least 5 digits")
      .max(12, "password cant be greater than 12 digits")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).*$/,
        "Password must contain at least one lowercase letter and one uppercase letter"
      )
      .required("password is Required"),
    /* ... - include all the fields
            {} - 
            if  isLogin === true we only insert email and password if its false
            we need  check the fName and lName to the object
             */
    ...(isLogIn
      ? {}
      : {
          client_fName: Yup.string().required("First Name is Required "),
          client_lName: Yup.string().required("Last Name is Required"),
          termsAgreed: Yup.boolean()
          .oneOf([true], "You must accept the Terms and Conditions")
          .required("You must accept the Terms and Conditions")
        }),
  });

  function handleClosModel() {
    setShowModelProfile(false);
  }

// handel login and register for regale submit
    function handleSubmit(values) {
    if (isLogIn) {
      loginClient(values);
    } else {
      addClient(values);
    }
  }


  
    // add req  for server
    async function loginClient(values) {
      try {
        const { data } = await axios.post(`${url}/login`, values, {
          withCredentials: true,
        });
        console.log("clint info : ", data);
        if (!data.success) throw new Error("don't success to login");
        // need to add  to stat client name to show it on upper nav bar
        setClientName(data.client.client_fName );
        setClientInfo(data.client);
        /*
         save is info in sessionStorage so when he refresh on purchase i will not get error
         and i can get is info (les risk)
        */
       
         const {client_fName,client_lName,client_email,_id} = data.client

         sessionStorage.setItem("clientInfo", JSON.stringify(
            {client_fName,client_lName,client_email,_id}));
            
        if (data.success && sessionStorage.getItem("checkOut")==="true"){
            console.log ("in befor")

        setShowModelCart(false)
        navigate("/purchase")
        sessionStorage.clear("checkOut")
        console.log ("in")

      } 
      setShowModelProfile(false)

      } catch (error) {
        // console.error("Error logging in:", error);
        console.log("Error logging in:");
      }
    }

    //  add new client
    async function addClient(values) {
      try {
        const data = await axios.post(`${url}/register`, values, {
          withCredentials: true,
        });
            /*
         save is info in sessionStorage so when he refresh on purchase i will not get error
         and i can get is info (les risk)
        */

    sessionStorage.setItem("clientInfo", JSON.stringify(values));

    // after client register i want him to see the log in
    // need to set the is login to true
    setIsLogIn(true);
        
        // console.log("register succuss")
      } catch (error) {
        console.error("An error occurred while register:", error);
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
    <Model onClick={handleClosModel} show={showModelProfile}>
      <Formik
        initialValues={initialValues}
        validationSchema={objectSchema}
        onSubmit={ handleSubmit}
      >
        <Form className="w-auto h-auto mx-auto items-center justify-center ">
          <h2 className="text-xl font-bold dark:text-white p-1 flex  justify-center ">
            {isLogIn ? "Log in" : "Register"}
          </h2>
          {/* {console.log("isLogin:" , isLogIn)} */}
          {!isLogIn && (
            <>
              <FieldMy name={"client_fName"} placeholder={"*First Name"} />
              <FieldMy name={"client_lName"} placeholder={"*Last Name"} />
            </>
          )}

          <FieldMy
            name={"client_email"}
            placeholder={"*Email"}
            type={"email"}
          />

          <FieldMy
            name={"client_password"}
            placeholder={"*Password"}
            type={"password"}
          />

        {isLogIn?           <div className="mb-5">
            <Link
              to="ForgotPassword"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={handleClosModel}
            >
              Forgot Password?
            </Link>
          </div> :<div> <div className="mb-5">
                  <Field
                    type="checkbox"
                    name="termsAgreed"
                    className="mr-2"
                  />
                  <label htmlFor="termsAgreed">
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
                  <ErrorMessage
                    name="termsAgreed"
                    component="div"
                    className="text-red-500"
                  />
                </div><div className="mb-5">
                <button  className="block text-sm text-gray-900 "   onClick={() => {
                      setIsLogIn(true);
                    }}>
                If you already have an account
                </button>
              </div></div> }
              {isLogIn && (
                <div className="mb-5" >
                  <button
                    className="block text-sm text-gray-900 "
                    onClick={() => {
                      setIsLogIn(false);
                    }}
                  >
                    For register click here.
                  </button>
                </div>
              )}
               <button
              type="button"
              onClick={loginFromGoogle}
              className="w-full flex items-center justify-center text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 border border-gray-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-600 dark:text-white"
            >
              <FcGoogle className="mr-2" size={25} />
              {`${isLogIn
             ? "Login" : "register"} with Google`}
            </button>
          <button
            className="text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-customGold dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </Model>
  );
}
