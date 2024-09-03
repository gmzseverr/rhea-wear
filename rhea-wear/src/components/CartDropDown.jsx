import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function CartDropDown() {
  const cartItems = useSelector((state) => state.shoppingCart.cart || []);
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden">
      {cartItems.length === 0 ? (
        <div className="p-4 text-center text-gray-500">Your cart is empty</div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.product.id}
              className="flex items-center p-4 border-b"
            >
              <img
                src={item.product.images[0].url}
                className="w-16 h-16 object-cover"
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-semibold">{item.product.name}</p>
                <p className="text-xs text-gray-500">${item.product.price}</p>
                <p className="text-xs text-gray-500">Quantity: {item.count}</p>
              </div>
              <button className="text-red-500">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="py-4 px-2 text-right border-t flex justify-around ">
        <button className="justify-center rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300">
          Buy
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="justify-center rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300"
        >
          View Cart
        </button>
      </div>
    </div>
  );
}

export default CartDropDown;
