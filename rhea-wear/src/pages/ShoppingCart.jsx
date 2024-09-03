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
    new Set(cart.map((item) => item.product.id)) // Başlangıçta tüm ürünler seçili olacak
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.product.id}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <input
                  type="checkbox"
                  checked={selectedItems.has(item.product.id)}
                  onChange={() => handleSelectItem(item.product.id)}
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p>{item.product.description}</p>
                  <p className="text-gray-600">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.product.id)}
                    className="bg-gray-200 p-2 rounded"
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => handleIncrement(item.product.id)}
                    className="bg-gray-200 p-2 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.product.id)}
                    className="text-red-600"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
                <div className="ml-4">
                  <span className="font-semibold">Total:</span> $
                  {(item.count * item.product.price).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-xl font-bold">
              Total Price: ${getTotalPrice().toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
