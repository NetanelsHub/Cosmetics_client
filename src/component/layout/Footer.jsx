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
              <li>
                <Link to="/aboutUs" className="text-lg hover:text-customGold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="text-lg hover:text-customGold">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacyPolicy" className="text-lg hover:text-customGold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsAndConditions" className="text-lg hover:text-customGold">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-lg hover:text-customGold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
            <div className="flex items-center space-x-4 mb-4">
              <FaPhone className="text-3xl text-customGold" />
              <span className="text-lg">Phone: (972) 050-7499-663</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-customGold" />
              <a href="mailto:cosmeticsproject2024@gmail.com" className="text-lg hover:text-customGold">
                Email: cosmeticsproject2024@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center"> {/* Reduced mt-8 to mt-4 */}
        <p className="text-lg">© 2024, Cosmetic Powered by Nati & Orel & Yossi</p>
      </div>
    </footer>
  );
}