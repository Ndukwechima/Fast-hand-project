import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const GetStartedButton = ({ to, children }) => (
  <NavLink
    to={to}
    className="!bg-pink900 hover:opacity-80 text-white px-4 font-bold py-2 rounded"
  >
    {children}
  </NavLink>
);

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black p-8 flex items-center justify-between shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 mr-4" />
      </div>

      <div className="hidden md:flex md:text-sm lg:text-md font-bold space-x-4 text-textGray">
        <NavLink
          to="/"
          className="hover:text-skyBlue900 px-3 py-2 transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className="hover:text-skyBlue900 px-3 py-2 transition duration-300"
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-skyBlue900 px-3 py-2 transition duration-300"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-skyBlue900 px-3 py-2 transition duration-300"
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/searchcustomer"
          className="hover:text-skyBlue900 px-3 py-2 transition duration-300"
        >
          Search
        </NavLink>
        <GetStartedButton to="/artissans/signup">Get Started</GetStartedButton>
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
          <NavLink
            to="/"
            className="hover:opacity-40 px-3 py-2 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="hover:opacity-40 px-3 py-2 transition duration-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className="hover:opacity-40 px-3 py-2 transition duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:opacity-40 px-3 py-2 transition duration-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/searchcustomer"
            className="hover:opacity-40 px-3 py-2 transition duration-300"
          >
            Search
          </NavLink>
          <GetStartedButton to="/artissans/signup">
            Get Started
          </GetStartedButton>
        </div>
      )}
    </header>
  );
};

export default Header;
