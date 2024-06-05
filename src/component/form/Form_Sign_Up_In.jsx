import React, { useContext, useState } from "react";
import Model from "../common/Model";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { globalContext } from "../../utils/GlobalContext";
import FieldMy from "../common/FiledMy";
import axios from "axios";


const initialValues = {
    client_email: "",
    client_password: "",
    client_fName: "",
    client_lName: "",
};

///login
const url = "http://localhost:3000/client";

export default function Form_Sign_Up_In() {
    const { showModelProfile, setShowModelProfile, setIsLogIn, isLogIn, setClientName, 
        setClientInfo } = useContext(globalContext)

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
            }),
    });

    function handleClosModel() {
        setShowModelProfile(false);
    }

    function handelLoginSubmit(values) {
        // add req  for server
        async function loginClient(values) {
            try {

                const { data } = await axios.post(`${url}/login`, values, {
                    withCredentials: true,
                });
                console.log("clint info : "  , data)
                if (!data.success) throw new Error("don't success to login");
                // need to add  to stat client name to show it on upper nav bar
                setClientName(data.client.client_fName + " " + data.client.client_lName)
                setClientInfo(data.client)
            } catch (error) {
                // console.error("Error logging in:", error);
                console.log("Error logging in:");
            }
        }


        loginClient(values)
        setShowModelProfile(false);
    }

    function handelRegisterSubmit(values) {
        //  add new client
        async function addClient(values) {
            try {
                const data = await axios.post(`${url}/register`, values, {
                    withCredentials: true,
                });
                // console.log("register succuss")
            } catch (error) {
                console.error("An error occurred while register:", error);

            }
        }

        addClient(values)

        // after client register i want him to see the log in 
        // need to set the is login to true
        setIsLogIn(true)

    }

    return (
        <Model onClick={handleClosModel} show={showModelProfile}>
            <Formik
                initialValues={initialValues}
                validationSchema={objectSchema}
                onSubmit={isLogIn ? handelLoginSubmit : handelRegisterSubmit}
            >
                <Form className="w-auto h-auto mx-auto">
                    <h2 className="text-xl font-bold dark:text-white p-1 ">
                        {isLogIn ? "Log in" : "Register"}
                    </h2>
                    {/* {console.log("isLogin:" , isLogIn)} */}
                    {!isLogIn && (
                        <>
                            <FieldMy name={"client_fName"} placeholder={"*First Name"} />
                            <FieldMy name={"client_lName"} placeholder={"*Last Name"} />
                        </>
                    )}

                    <FieldMy name={"client_email"} placeholder={"*Email"} type={"email"} />

                    <FieldMy name={"client_password"} placeholder={"*Password"} type={"password"} />


                    <div className="mb-5">
                        <a
                            href="/forgot-password"
                            className="block text-sm text-gray-900 dark:text-white mb-2"
                        >
                            Forgot password?
                        </a>
                    </div>
                    {isLogIn &&
                        <div className="mb-5">
                            <button
                                className="block text-sm text-gray-900 dark:text-white mb-2  hover:bg-customGold"
                                onClick={() => { setIsLogIn(false) }}
                            >
                                For register click here.
                            </button>
                        </div>
                    }
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