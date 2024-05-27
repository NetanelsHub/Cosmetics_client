import React, { Children } from "react";
import { Link } from "react-router-dom";

export default function Li({ navName}) {
  return (
    <li
        
      
        className="`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white "
      >
        {navName}
    
    </li>
  );
}


