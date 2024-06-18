import axios from "axios";


import React, { useContext, useState } from "react";
import { globalContext } from "../utils/GlobalContext";
// import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/client/resetPassword";

function ResetPassword() {
    const {
        setIsLogIn,
        setShowModelProfile,
        setShowDropdownMenu,
      } = useContext(globalContext);

  const query = new URLSearchParams(location.search);
  const token = query.get("token")
  const id = query.get("uid")

//   const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const confirmPassword = e.target.confirm_password.value; 
    const password = e.target.password.value; 
    if(confirmPassword !== password) return alert("password not match");
    try {
     const { data } = await axios.post(`${url}?token=${token}&uid=${id}`,{ password });
     if(data.success){
        setIsLogIn(true)
        // if user not valid he will go to catch and we open login in model
        setShowDropdownMenu(true);
        setShowModelProfile(true)
      
     }
    } catch (error) {
      console.log(error);
      alert("you hackerrrrr")
    }
  }





  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="confirm-password"
                name="confirm_password"
                id="confirm_password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
