import React, { useState } from "react";
import razorpayLogo from "../assets/Images/razorpay-icon.png";
import indiaLogo from "../assets/Images/india-logo.png";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing icons from Heroicons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md h-20">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img src={razorpayLogo} alt="Razorpay Logo" className="h-36" />
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden flex items-center">
          <img src={indiaLogo} alt="India Logo" className="h-10 mr-2" />
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center space-x-8 h-full">
          {['Payments', 'Banking+', 'Payroll', 'Partners', 'Resources', 'Support', 'Pricing'].map((item) => (
            <a
              href="#"
              key={item}
              className="relative text-gray-700 hover:text-blue-600 text-lg h-full flex items-center group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </a>
          ))}
          {/* Country Flag */}
          <img src={indiaLogo} alt="India Logo" className="h-10" />
          {/* Buttons */}
          <button className="border border-blue-600 py-2 px-4 rounded text-blue-600 hover:bg-blue-50">
            Login
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md mt-2">
          {['Payments', 'Banking+', 'Payroll', 'Partners', 'Resources', 'Support', 'Pricing'].map((item) => (
            <a
              href="#"
              key={item}
              className="text-gray-700 hover:text-blue-600 py-2"
            >
              {item}
            </a>
          ))}
          {/* Mobile Buttons */}
          <button className="border border-blue-600 py-2 px-4 rounded text-blue-600 hover:bg-blue-50">
            Login
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
