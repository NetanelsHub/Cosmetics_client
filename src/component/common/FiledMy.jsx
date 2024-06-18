import React from "react";
import {  Field, ErrorMessage } from "formik";


export default function FieldMy({ name, placeholder, type , readOnly = false }) {
 
  
  return (
    <div className="mb-5 flex-col justify-center items-center px-11">

      <Field
        type={type}
        id={name}
        name={`${name}`}

        // disabled={readOnly}
        className={`border-b border-black p-2 w-full ${
          readOnly ? "bg-gray-200 text-gray-900" : "dark:text-white dark:border-white"
        }`}

        readOnly = {readOnly && readOnly}

        placeholder={placeholder}
        required
      />
    
      <ErrorMessage
        className="text-red-600 text-sm"
        name={`${name}`}
        component="div"
      />
    </div>
  );
}