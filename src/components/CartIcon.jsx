import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartDropDown from "./CartDropDown";

function CartIcon() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const cartItems = useSelector((state) => state.shoppingCart.cart) || []; // Default to an empty array if undefined
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  const handleCartClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={handleCartClick} className="relative flex items-center">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="sm:text-[#252B42] text-[#23A6F0] font-bold text-sm"
        />
        {cartItemCount > 0 && (
          <span
            className="absolute top-0 right-0  w-3 h-3 text-xs text-white bg-red-600 rounded-full flex items-center justify-center"
            style={{ transform: "translate(50%, -50%)" }}
          >
            {cartItemCount}
          </span>
        )}
      </button>
      {isDropdownVisible && <CartDropDown />}
    </div>
  );
}

export default CartIcon;
