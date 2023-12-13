import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 mr-4" />
      </div>

      <div className="hidden md:flex space-x-4 text-black">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/search">Search</NavLink>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className=" focus:outline-none">
          {isMenuOpen ? (
            <span className="">&times;</span>
          ) : (
            <span className="block">☰</span>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-1 flex flex-col bg-skyBlue900 text-white p-4 rounded">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/search">Search</NavLink>
          <button className="bg-skyblue500 text-white px-4 py-2 rounded mt-2 block">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className=" hover:text-gray-600  px-3 py-2 transition duration-300"
  >
    {children}
  </Link>
);

export default Header;
