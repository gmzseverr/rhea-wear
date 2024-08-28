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
import { useSelector } from "react-redux";
import gravatarUrl from "gravatar-url";
import CategoryList from "../components/CategoryList";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const user = useSelector((state) => state.client.user);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMouseEnterHome = () => {
    setHomeDropdownOpen(true);
  };

  const handleMouseLeaveHome = () => {
    setHomeDropdownOpen(false);
  };

  const handleMouseEnterShop = () => {
    setShopDropdownOpen(true);
  };

  const handleMouseLeaveShop = () => {
    setShopDropdownOpen(false);
  };

  return (
    <div className="px-52 sm:px-10 my-7 " id="top">
      <div className="flex justify-between items-center sm:justify-around">
        <Link to="/" className="text-[#252B42] font-extrabold text-2xl">
          rhea.
        </Link>

        <nav className="sm:hidden flex space-x-8">
          <section
            onMouseEnter={handleMouseEnterHome}
            onMouseLeave={handleMouseLeaveHome}
            className="relative"
          >
            <NavLink
              to="/"
              className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            >
              Home
            </NavLink>
            {homeDropdownOpen && (
              <div className="absolute top-full font-bold left-0 mt-2 w-48 bg-white shadow-lg rounded-md hover:text-[#23A6F0]">
                <NavLink
                  to="/home"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                >
                  Home
                </NavLink>
                <NavLink
                  to="/product"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Product
                </NavLink>
                <NavLink
                  to="/pricing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contact
                </NavLink>
              </div>
            )}
          </section>

          <section
            onMouseEnter={handleMouseEnterShop}
            onMouseLeave={handleMouseLeaveShop}
            className="relative"
          >
            <NavLink
              to="/shop"
              className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            >
              Shop
            </NavLink>
            {shopDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-40">
                <CategoryList />
              </div>
            )}
          </section>

          {/* Other navigation links */}
          <section>
            <NavLink
              to="/about"
              className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            >
              About
            </NavLink>
          </section>
          <section>
            <NavLink
              to="/blog"
              className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            >
              Blog
            </NavLink>
          </section>
          <section>
            <NavLink
              to="/contact"
              className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            >
              Contact
            </NavLink>
          </section>
          <section>
            <NavLink
              to="/pages"
              className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
            >
              Pages
            </NavLink>
          </section>
        </nav>

        <div className="flex items-center space-x-4 sm:text-[#252B42] text-[#23A6F0] font-bold text-sm">
          <FontAwesomeIcon icon={faUser} />
          {user && user.email ? (
            <div className="flex items-center space-x-2">
              <img
                src={gravatarUrl(user.email, { size: 40 })}
                alt="User Avatar"
                className="rounded-full"
              />
              <span>{user.name}</span>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="sm:hidden flex items-center gap-1"
                activeClassName="active-link"
              >
                <p>Login</p>
              </NavLink>
              <NavLink
                to="/register"
                className="sm:hidden flex items-center gap-1"
                activeClassName="active-link"
              >
                <p>Register</p>
              </NavLink>
            </>
          )}
          <a href="/" className="flex items-center">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className="flex items-center">
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
      </div>
    </div>
  );
}

export default Header;
