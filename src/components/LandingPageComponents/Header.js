import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#F5F7FA] p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="MySite Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-14">
          <a href="#home" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Home
          </a>
          <a href="#features" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Service
          </a>
          <a href="#features" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Feature
          </a>
          <a href="#features" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Product
          </a>
          <a href="#contact" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Testimonial
          </a>
          <a href="#contact" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Buttons for Desktop */}
        <div className="hidden lg:flex space-x-4">
          <button className="text-[#4CAF4F] bg-[#F5F7FA] text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#4CAF4F] hover:text-white transition">
            Login
          </button>
          <button className="text-white bg-[#4CAF4F] text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#4CAF4F] hover:text-white transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {/* Logo in Mobile Menu */}
          <div className="flex justify-between items-center">
            <img src={logo} alt="MySite Logo" className="h-8 w-auto" />
            <button onClick={toggleMenu} className="text-gray-800">
              <HiX size={24} />
            </button>
          </div>
          {/* Mobile Navigation Links */}
          <a href="#home" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Home
          </a>
          <a href="#features" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Service
          </a>
          <a href="#features" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Feature
          </a>
          <a href="#features" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Product
          </a>
          <a href="#contact" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            Testimonial
          </a>
          <a href="#contact" className="text-gray-800 font-inter font-normal text-[16px] leading-[24px] hover:font-medium">
            FAQ
          </a>
          <button className="text-[#4CAF4F] bg-[#F5F7FA] text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#4CAF4F] hover:text-white transition">
            Login
          </button>
          <button className="text-white bg-[#4CAF4F] text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#4CAF4F] hover:text-white transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
