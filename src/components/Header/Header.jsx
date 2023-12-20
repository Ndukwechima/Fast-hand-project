import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const CustomNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="hover:text-skyBlue900 px-3 py-2 transition duration-300"
  >
    {children}
  </Link>
);

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black p-8 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 mr-4" />
      </div>

      <div className="hidden md:flex text-2xl font-bold space-x-4 text-textGray">
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/services">Services</CustomNavLink>
        <CustomNavLink to="/about">About Us</CustomNavLink>
        <CustomNavLink to="/contact">Contact Us</CustomNavLink>
        <CustomNavLink to="/search">Search</CustomNavLink>
        <button className="bg-pink900 text-white px-4 font-bold py-2 rounded">
          Get Started
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <span className="">&times;</span>
          ) : (
            <span className="block">☰</span>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-1 flex flex-col bg-skyBlue900 text-white p-4 rounded">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/services">Services</CustomNavLink>
          <CustomNavLink to="/about">About Us</CustomNavLink>
          <CustomNavLink to="/contact">Contact Us</CustomNavLink>
          <CustomNavLink to="/search">Search</CustomNavLink>
          <button className="bg-pink900 text-white px-4 py-2 rounded mt-2 block">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
