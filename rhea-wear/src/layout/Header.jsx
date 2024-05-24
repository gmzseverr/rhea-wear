import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div>
      <div className="flex justify-between items-center mx-36 my-7">
        <div>
          <h1 className="text-[#252B42] font-extrabold text-2xl">rhea.</h1>
        </div>
        <nav className="hidden sm:flex sm:ml-6 space-x-8">
          <a
            href="#"
            className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Content
          </a>
          <a
            href="#"
            className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Pages
          </a>
        </nav>
        <div className="flex space-x-4 text-[#23A6F0] font-bold text-sm">
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
            Login / Register
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
