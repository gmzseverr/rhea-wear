import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faPowerOff,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gravatarUrl from "gravatar-url";
import CategoryList from "../components/CategoryList";
import CartDropDown from "../components/CartDropDown";
import CartIcon from "../components/CartIcon";
import { setUser } from "../redux/actions/clientActions";

function Header() {
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.client);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };

  const cartItemCount = useSelector((state) =>
    (state.shoppingCart.cartItems || []).reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("Menü durumu:", isNavOpen);
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

  const handleCartClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="px-52 sm:px-10 my-7" id="top">
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
              className={({ isActive }) =>
                `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              Home
            </NavLink>
            {homeDropdownOpen && (
              <div className="absolute top-full font-bold left-0 mt-2 w-48 bg-white shadow-lg rounded-md hover:text-[#23A6F0]">
                <NavLink
                  to="/home"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
              className={({ isActive }) =>
                `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                  isActive ? "active-link" : ""
                }`
              }
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
              className={({ isActive }) =>
                `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              About
            </NavLink>
          </section>
          <section>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              Pricing
            </NavLink>
          </section>
          <section>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </section>
          <section>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              Pages
            </NavLink>
          </section>
        </nav>

        <div className="flex items-center space-x-4 sm:text-[#252B42] text-[#23A6F0] font-bold text-sm">
          {user && user.email ? (
            <div className="flex items-center space-x-2">
              <img
                src={gravatarUrl(user.email, { size: 20 })}
                alt="User Avatar"
                className="rounded-full"
              />
              <span>
                <NavLink to="/profile"> {user.name}</NavLink>
              </span>

              <button onClick={handleLogout} className="font-bold text-red-600">
                <FontAwesomeIcon icon={faPowerOff} />
              </button>
            </div>
          ) : (
            <>
              <FontAwesomeIcon icon={faUser} />
              <NavLink
                to="/login"
                className="sm:hidden flex items-center gap-1"
              >
                <p>Login</p>
              </NavLink>
              <NavLink
                to="/register"
                className="sm:hidden flex items-center gap-1"
              >
                <p>Register</p>
              </NavLink>
            </>
          )}

          <a href="/" className="flex items-center relative">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <div className="relative">
            <button
              onClick={handleCartClick}
              className="flex items-center relative"
            >
              <CartIcon />
              {cartItemCount > 0 && (
                <span
                  className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ transform: "translate(50%, -50%)" }}
                >
                  {cartItemCount}
                </span>
              )}
            </button>
            {isDropdownOpen && <CartDropDown />}
          </div>

          <a href="/favorites" className="sm:hidden flex items-center">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <button onClick={toggleNav} className="hidden sm:flex items-center">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <div
        className={`${
          isNavOpen ? "block sm:block md:block" : "hidden"
        }  hidden mt-4`}
      >
        <nav className="flex flex-col space-y-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                isActive ? "active-link" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                isActive ? "active-link" : ""
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                isActive ? "active-link" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                isActive ? "active-link" : ""
              }`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                isActive ? "active-link" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              `text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium ${
                isActive ? "active-link" : ""
              }`
            }
          >
            Pages
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
