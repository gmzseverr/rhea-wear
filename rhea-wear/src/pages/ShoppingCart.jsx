import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateCartItem,
} from "../redux/actions/shoppingCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const [selectedItems, setSelectedItems] = React.useState(
    new Set(cart.map((item) => item.product.id))
  );

  // Miktarı artırma
  const handleIncrement = (productId) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      const newCount = item.count + 1;
      dispatch(updateCartItem(productId, newCount));
    }
  };

  // Miktarı azaltma
  const handleDecrement = (productId) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item && item.count > 1) {
      const newCount = item.count - 1;
      dispatch(updateCartItem(productId, newCount));
    }
  };

  // Ürünü sepetten kaldırma
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Ürünü seçme/deseçme
  const handleSelectItem = (productId) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(productId)) {
      newSelectedItems.delete(productId);
    } else {
      newSelectedItems.add(productId);
    }
    setSelectedItems(newSelectedItems);
  };

  // Toplam fiyatı hesaplama
  const getTotalPrice = () => {
    return cart
      .filter((item) => selectedItems.has(item.product.id))
      .reduce((total, item) => total + item.count * item.product.price, 0);
  };

  return (
    <div className="pt-32 sm:px-10 px-40 sm:flex-col ">
      <h1 className="text-[#23A6F0] text-2xl font-bold pb-10">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="">
            {cart.map((item) => (
              <li
                key={item.product.id}
                className="flex  border-b py-4 w-full justify-between items-center"
              >
                <div className="flex">
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(item.product.id)}
                      onChange={() => handleSelectItem(item.product.id)}
                      className="bg-[#23A6F0]"
                    />
                    <img
                      src={item.product.images[0].url}
                      className="w-16 h-16 object-cover"
                    />
                    <section>
                      <h2 className="text-[#737373] font-bold text-l">
                        {item.product.name}
                      </h2>
                      <p className="text-[#858585] text-sm">
                        {item.product.description}
                      </p>
                    </section>
                  </div>
                </div>
                <div className="flex items-center ">
                  <button
                    onClick={() => handleDecrement(item.product.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    -
                  </button>
                  <span className="p-2 text-sm">{item.count}</span>
                  <button
                    onClick={() => handleIncrement(item.product.id)}
                    className="bg-gray-200 px-2  rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.product.id)}
                    className="text-red-600 pl-4"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
                <div className=" text-zinc-950  font-bold pr-4 ">
                  <span></span> ${(item.count * item.product.price).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-[#23A6F0] text-xl font-bold pt-10 flex justify-end">
              Total Price: ${getTotalPrice().toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
