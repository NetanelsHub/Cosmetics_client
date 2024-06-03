
import React, { useContext } from "react";
import Model from "../common/Model";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { globalContext } from "../../utils/GlobalContext";
import FieldMy from "../common/FiledMy";


const initialValues = {
    client_email: "",
    client_password: "",
};

export default function Form_Sign_Up_In() {

    const { showModelProfile, setShowModelProfile, isLogIn } = useContext(globalContext);

    const objectSchema = Yup.object({
        client_email: Yup.string()
            .email("email must be valid email")
            .required("Email is Required"),
        client_password: Yup.string()
            .min(5, "password must be at least 5 digits")
            .max(12, "password cant be greater than 12 digits")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])/,
                "Password must contain at least one lowercase letter and one uppercase letter"
            )
            .required("password is Required"),
        /* ... - include all the fields
        {} - 
        if  isLogin == false mean we  in register so we need to check fName and lName
         */
        ...(!isLogIn ? {} : {
            client_fName: Yup.string().required("First Name is Required "),
            client_lName: Yup.string().required("Last Name is Required")
        })

    });

    function handleClosModel() {
        console.log(" iam in close model")
        setShowModelProfile(false);
    }

    function handelLoginSubmit(values) {
        // need do it!!!
        console.log("submit not working: ",values)
        setShowModelProfile(false)
    }

    return (
        <Model onClick={handleClosModel} show={showModelProfile}>
            <Formik
                initialValues={initialValues}
                validationSchema={objectSchema}
                onSubmit={handelLoginSubmit}
            >
                <Form className="w-auto h-auto mx-auto">
                    <h2 className="text-xl font-bold dark:text-white p-1 "> {isLogIn ? "Log in" : "Register"} </h2>
                    {/* {console.log("isLogin:" , isLogIn)} */}
                    {!isLogIn &&
                        <>
                            <FieldMy
                                name={"client_fName"}
                                placeholder={"*First Name"} />
                            <FieldMy
                                name={"client_lName"}
                                placeholder={"*Last Name"} />
                        </>

                    }

                    <FieldMy

                        name={"client_email"}
                        placeholder={"*Email"} />
                    <FieldMy
                        name={"client_password"}
                        placeholder={"*Password"} />

                    <div className="mb-5">
                        <a
                            href="/forgot-password"
                            className="block text-sm text-gray-900 dark:text-white mb-2"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <button
                        className="text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-customGold dark:focus:ring-blue-800"
                        type="submit"
                    >

                        Submit
                    </button>

                </Form>
            </Formik>
        </Model>

    )
}
