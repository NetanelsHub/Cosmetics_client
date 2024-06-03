import React, { useContext } from "react";
import { globalContext } from "../../utils/GlobalContext";
import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";



export default function ProfileSideBar({ Children }) {


  const { setIsLogIn, showDropdownMenu, setShowModelProfile } = useContext(globalContext);

  function handelLogIn() {
    console.log("we in handel log in ");
    setShowModelProfile(true)

    // we on log in
    setIsLogIn(true);
  }
  function handelRegister(){
    setShowModelProfile(true)
    setIsLogIn(false)
  }

  return showDropdownMenu ? (
    <div className=" absolute top-0 left-0 h-[100vh] w-auto bg-white  text-xl border-gray-300 shadow-md rounded-md z-50  ">
      <ul className="list-none p-2">
        <li
          className="py-2 px-4 flex items-center hover:bg-gray-100 cursor-pointer hover:text-customGold"
          onClick={handelLogIn}
        >
          <CiLogin
            className="mr-2"
            size={20}
            
          />
          Login
        </li>
        <li 
        className="py-2 px-4 flex items-center hover:bg-gray-100 cursor-pointer hover:text-customGold"
        onClick={handelRegister}
        >
          <FaUserPlus
            className="mr-2"
            size={20}
          />
          Register
        </li>
        {/* <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer hover:text-customGold">Logout</li> */}
        {Children}
      </ul>
    </div>
  ) : null;
}