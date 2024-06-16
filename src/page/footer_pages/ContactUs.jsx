import React from 'react'
import FooterNavigate from '../../component/common/FooterNavigate'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export default function ContactUs() {
  const initialValues = {
    firstAndLastName: '',
    phone: '',
    email: '',
    requestDetails: ''
  };

  const validationSchema = Yup.object({
    firstAndLastName: Yup.string().required('First and Last Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    requestDetails: Yup.string().required('Request details are required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form data submitted:', values);
    setSubmitting(false);
    // Add your form handling code here, such as sending data to a server
  };

  return (
    <>
    <FooterNavigate currentPageName="Contact Us"/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg max-w-4xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li>
              <div className="flex items-center">
                <div className="icon bg-customGold rounded-full p-2">
                  <i className="fa fa-phone text-white"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-700">Talk to us</h4>
                  <p className="text-gray-600">
                    <b>Toll-Free:</b> 0803 - 080 - 3081<br />
                    <b>Fax:</b> 0803 - 080 - 3082
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="icon bg-customGold rounded-full p-2">
                  <i className="fa fa-envelope text-white"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-700">Contact Us</h4>
                  <p className="text-gray-600">
                    <a href="mailto:contact@yourcompany.com" className="text-blue-500">contact@yourcompany.com</a><br />
                    <a href="mailto:support@yourcompany.com" className="text-blue-500">support@yourcompany.com</a>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="icon bg-customGold rounded-full p-2">
                  <i className="fa fa-location-arrow text-white"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-700">Location</h4>
                  <p className="text-gray-600">
                    No: 58 A, East Madison Street,<br />
                    Baltimore, MD, USA 4508
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="firstAndLastName" className="block text-sm font-medium text-gray-700">Full Name:</label>
                  <Field type="text" id="firstAndLastName" name="firstAndLastName" className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <ErrorMessage name="firstAndLastName" component="div" className="mt-1 text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
                  <Field type="tel" id="phone" name="phone" className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <ErrorMessage name="phone" component="div" className="mt-1 text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                  <Field type="email" id="email" name="email" className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <ErrorMessage name="email" component="div" className="mt-1 text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="requestDetails" className="block text-sm font-medium text-gray-700">Request Details:</label>
                  <Field as="textarea" id="requestDetails" name="requestDetails" rows="5" className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <ErrorMessage name="requestDetails" component="div" className="mt-1 text-red-600 text-sm" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-2 px-4 bg-customGold text-white rounded-md shadow-sm hover:bg-customGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:customGold">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
