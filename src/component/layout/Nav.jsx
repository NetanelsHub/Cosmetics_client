import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Li from "../common/Li"
import useFetch from "../../services/useFetch";
import { FaShoppingCart, FaUser, FaEnvelope } from 'react-icons/fa'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const endPoint = "categories/getAll"
  const { data, isLoading, isError } = useFetch(endPoint)
  console.log("my data:", data)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b sticky top-0 z-50 " >

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
            <ul className="flex ">

              <Li>
                <Link to="/contact" className="hover:text-customGold">
                  <FaEnvelope size={30} />
                </Link>
              </Li>
              <Li>
                <Link to="/profile" className="hover:text-customGold">
                  <FaUser size={30} />
                </Link>
              </Li>
              <Li>
                <Link to="/shopping-cart" className="hover:text-customGold  ">
                  <FaShoppingCart size={30} />
                </Link>
              </Li>
              <p>Total : 0 $</p>
            </ul>

          </div>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {isLoading && <li>Loading...</li>}
            {isError && <li>Error: {isError}</li>}
            {data &&
              data.categories.map((val, index) => (
                <Li key={index}>
                  <Link to={`/${val.category_name}`}>
                    {val.category_name}
                  </Link>
                </Li>


              ))}

          </ul>
        </div>
      </div>
    </nav>
    // need to add her footer
  );
}

export default Nav;
