import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";


export default function FieldMy({ name, placeholder, type,readOnly = false }) {
 
  
  return (
    <div className="mb-5 flex">

      <Field
        type={type}
        id={name}
        name={`${name}`}
        readOnly={readOnly}
        disabled={readOnly}
        className={`border-b border-black p-2 w-full ${
          readOnly ? "bg-gray-200 text-gray-900" : "dark:text-white dark:border-white"
        }`}
                
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