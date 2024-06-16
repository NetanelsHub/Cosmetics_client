import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-10 position:relative z-0 bottom-0 mt-10">
      <div className="container mx-auto flex justify-between">
      <div className="w-1/2 pl-10">
  <h2 className="text-lg font-bold mb-4">INFORMATION</h2>
  <ul className="space-y-2">
    <li>
      <Link to="aboutUs" className="inline-block hover:text-customGold">
        <span>About Us</span>
      </Link>
    </li>
    <li>
      <Link to="contactUs" className="inline-block hover:text-customGold">
        <span>Contact Us</span>
      </Link>
    </li>
    <li>
      <Link to="privacyPolicy" className="inline-block hover:text-customGold">
        <span>Privacy Policy</span>
      </Link>
    </li>
    <li>
      <Link to="termsAndConditions" className="inline-block hover:text-customGold">
        <span>Terms and Conditions</span>
      </Link>
    </li>
    <li>
      <Link to="blog" className="inline-block hover:text-customGold">
        <span>Blog</span>
      </Link>
    </li>
  </ul>
</div>


        <div className="w-1/2">
          <h2 className="text-lg font-bold mb-4">CONTACT US</h2> {/* Add the header here */}
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <span>Phone: (972) 050-7499-663</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:cosmeticsproject2024@gmail.com" className="hover:text-customGold">
              Email: cosmeticsproject2024@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>Copyright © 2024, Cosmetic Powered by Nati & Orial & Yossi  </p>
      </div>
    </footer>
  );
}
