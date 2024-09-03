import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartDropDown from "./CartDropDown"; // Adjust the path as necessary

function CartIcon() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const handleCartClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={handleCartClick} className="relative">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="w-8 h-8 text-gray-500"
        />
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 block w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>
      {isDropdownVisible && <CartDropDown />}
    </div>
  );
}

export default CartIcon;
