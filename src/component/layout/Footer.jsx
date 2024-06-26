import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">INFORMATION</h2>
            <ul className="space-y-2">
              <li className="hover:text-customGold">
                <Link to="aboutUs" className="text-lg">About Us</Link>
              </li>
              <li className="hover:text-customGold">
                <Link to="contactUs" className="text-lg">Contact Us</Link>
              </li>
              <li className="hover:text-customGold">
                <Link to="privacyPolicy" className="text-lg">Privacy Policy</Link>
              </li>
              <li className="hover:text-customGold">
                <Link to="termsAndConditions" className="text-lg">Terms and Conditions</Link>
              </li>
              <li className="hover:text-customGold">
                <Link to="blog" className="text-lg">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
            <div className="flex items-center space-x-4 mb-4">
              <FaPhone className="text-3xl text-customGold" />
              <span className="text-lg">Phone: (972) 050-7499-663</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:cosmeticsproject2024@gmail.com"
                className="text-lg hover:text-customGold"
              >
                Email: cosmeticsproject2024@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Copyright © 2024, Cosmetic Powered by Nati & Orel & Yossi </p>
        </div>
      </div>
    </footer>
  );
}