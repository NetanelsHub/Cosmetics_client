import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";


export default function FieldMy({ name, placeholder, type }) {
 
  
  return (
    <div className="mb-5">

      <Field
        type={type}
        id={name}
        name={`${name}`}
        className="border-b border-black  dark:text-white dark:border-white p-2"

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