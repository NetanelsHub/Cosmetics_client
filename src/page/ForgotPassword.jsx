import React, { useContext, useState } from "react";
import { globalContext } from "../utils/GlobalContext";
import axios from 'axios';

const url = "http://localhost:3000/client/forgotPassword";

export default function ForgotPassword() {
    const {
        setIsLogIn,
        setShowModelProfile,
        setShowDropdownMenu,
      } = useContext(globalContext);
  
  const [sendRecoverEmail, setSendRecoverEmail] = useState(false);
  const [client_email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const client_email = e.target.client_email.value;
    setEmail(client_email); // Set email state
    try {
      const { data } = await axios.post(url, { client_email });
      console.log(data);
      setSendRecoverEmail(true);
    } catch (error) {
      console.log(error);
    }
  }

 function ReturnToLogin(){
    setIsLogIn(true)
    // if user not valid he will go to catch and we open login in model
    setShowDropdownMenu(true);
    setShowModelProfile(true)
  
  }

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {!sendRecoverEmail ? (
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h2>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                {/* <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <LabelAndInput name={"admin_email"} lbl_txt={"Enter Email"} type={"email"} />
                </div> */}
                    <div className="mb-5">
      <label
        htmlFor="client_email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
        Enter Email
      </label>
      <input
        
        id="client_email"
        type="email"
        name="client_email"

        // {...(!isAdd && { value })}
        onChange={(e) => onChange(client_email, e.target.value) }
        
       
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=""
        required
      />
    </div>
                <div className="flex space-x-4">
                  {/* <Button btn_txt={"Reset password"} btn_type={"submit"} className="dark:bg-gray-700 dark:text-white" />
                   */}
                           <div className="flex justify-center"> 
            <button
                type="submit"
                className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Reset password
            </button>
        </div>
                  <button className="text-blue-500 dark:text-blue-300 hover:underline" onClick={() =>ReturnToLogin()}>Return to login</button>
                </div>
              </form>
            </div>
          ) : (
            <a
            href={`https://mail.google.com/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-300 hover:underline"
            >
              Successfully sent recovery email. Click here to open Gmail.
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
