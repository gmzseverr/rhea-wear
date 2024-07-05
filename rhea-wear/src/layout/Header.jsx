import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="mx-36 my-7">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-[#252B42] font-extrabold text-2xl">
          rhea.
        </Link>

        <nav className="hidden sm:flex space-x-8">
          <NavLink
            to="/"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Contact
          </NavLink>
          <NavLink
            to="/pages"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Pages
          </NavLink>
        </nav>

        <div className="flex space-x-4 text-[#737373] sm:text-[#23A6F0] font-bold text-sm">
          <a href="#" className="hidden sm:flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-1" />
            Login / Register
          </a>
          <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
          <a href="#" className="hidden sm:flex items-center">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <button onClick={toggleNav} className="sm:hidden flex items-center">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <div className={`${isNavOpen ? "block" : "hidden"} sm:hidden mt-4`}>
        <nav className="flex flex-col space-y-4 items-center">
          <NavLink
            to="/"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Home
          </NavLink>
          <NavLink
            to="/productCard"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Contact
          </NavLink>
          <NavLink
            to="/pages"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            activeClassName="text-[#23A6F0]"
          >
            Pages
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
