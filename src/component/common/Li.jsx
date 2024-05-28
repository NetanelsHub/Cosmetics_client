import React from "react";

export default function Li({ navName, children, onClick }) {
  return (
    <li
      onClick={onClick}
      className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white hover:text-customGold mr-4"
    >
      {navName}
      {children}
    </li>
  );
}
