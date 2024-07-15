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
import { Dropdown } from "react-bootstrap";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="px-52 sm:px-10 my-7">
      <div className="flex justify-between items-center sm:justify-around">
        <Link to="/" className="text-[#252B42] font-extrabold text-2xl">
          rhea.
        </Link>

        <nav className="sm:hidden flex space-x-8 ">
          <div>
            <NavLink
              onClick={toggleVisibility}
              to="/"
              className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            >
              <Dropdown isVisible={isVisible} />
              Home
            </NavLink>
          </div>
          <NavLink
            to="/shop"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
          >
            Contact
          </NavLink>
          <NavLink
            to="/pages"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
          >
            Pages
          </NavLink>
        </nav>
        <div className="flex items-center space-x-4 sm:text-[#252B42] text-[#23A6F0] font-bold text-sm">
          <FontAwesomeIcon icon={faUser} />
          <NavLink
            to="/login"
            className="sm:hidden flex items-center gap-1"
            activeClassName="active-link"
          >
            <p>Login</p>
          </NavLink>
          <p className="sm:hidden flex items-center gap-1">/</p>
          <NavLink
            to="/signup"
            className="sm:hidden flex items-center gap-1"
            activeClassName="active-link"
          >
            <p>Register</p>
          </NavLink>
          <a href="#" className=" flex items-center">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className=" flex items-center">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
          <a href="#" className="sm:hidden flex items-center">
            <FontAwesomeIcon icon={faHeart} />
          </a>

          <button onClick={toggleNav} className="hidden items-center">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isNavOpen ? "block" : "hidden"} mt-4 sm:hidden`}>
        <nav className="flex flex-col space-y-4 items-center">
          <NavLink
            to="/"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
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
