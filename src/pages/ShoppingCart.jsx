import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deselectItem,
  removeFromCart,
  selectItem,
  updateCartItem,
} from "../redux/actions/shoppingCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import OrderSummaryBox from "../components/OrderSummaryBox";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const selectedItems = useSelector(
    (state) => state.shoppingCart.selectedItems
  );

  // Toplam fiyatı hesaplayan fonksiyon
  const getTotalPrice = () => {
    return cart
      .filter((item) => selectedItems.has(item.product.id)) // Seçili öğeleri filtrele
      .reduce((total, item) => total + item.count * item.product.price, 0);
  };

  const handleIncrement = (productId) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      const newCount = item.count + 1;
      dispatch(updateCartItem(productId, newCount));
    }
  };

  const handleDecrement = (productId) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item && item.count > 1) {
      const newCount = item.count - 1;
      dispatch(updateCartItem(productId, newCount));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleSelectItem = (productId) => {
    if (selectedItems.has(productId)) {
      dispatch(deselectItem(productId));
    } else {
      dispatch(selectItem(productId));
    }
  };

  const handleProceedToOrder = () => {
    const selectedProductDetails = Array.from(selectedItems)
      .map((productId) => {
        const item = cart.find(
          (item) => item.product && item.product.id === productId
        );
        if (item && item.product) {
          return {
            id: item.product.id,
            name: item.product.name,
            description: item.product.description,
            price: item.product.price,
            count: item.count,
            detail: item.product.detail,
          };
        } else {
          console.error("Product is undefined for item", productId);
          return null;
        }
      })
      .filter(Boolean); // null olan öğeleri filtrele

    if (selectedProductDetails.length > 0) {
      const totalPrice = getTotalPrice();
      navigate("/order", {
        state: {
          selectedItems: selectedProductDetails,
          totalPrice: totalPrice,
        },
      });
    } else {
      console.error("No valid products selected");
    }
  };

  return (
    <div className="pt-32 sm:px-10 px-40 sm:flex-col flex justify-between items-center">
      <section>
        <h1 className="text-[#23A6F0] text-2xl font-bold pb-10">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.product.id}
                  className="flex flex-col border-b py-4 w-full justify-between items-center"
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
                  <section className="flex items-center">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(item.product.id)}
                        className="bg-gray-200 px-2 rounded"
                      >
                        -
                      </button>
                      <span className="p-2 text-sm">{item.count}</span>
                      <button
                        onClick={() => handleIncrement(item.product.id)}
                        className="bg-gray-200 px-2 rounded"
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
                    <div className="text-zinc-950 font-bold pr-4">
                      <span></span> $
                      {(item.count * item.product.price).toFixed(2)}
                    </div>
                  </section>
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
      </section>
      <section className="flex flex-col gap-2">
        <OrderSummaryBox orderTotal={getTotalPrice()} />

        <button
          onClick={handleProceedToOrder}
          className="bg-[#23A6F0] text-white py-2 px-4 rounded-md font-semibold hover:bg-sky-300"
        >
          Proceed to Order
        </button>
      </section>
    </div>
  );
};

export default ShoppingCart;
