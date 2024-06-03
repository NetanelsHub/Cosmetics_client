import React from "react";
import {Formik, Field , ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FieldMy({name, placeholder }) {
  return (
    <div className="mb-5">
    
      <Field
        type={name}
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