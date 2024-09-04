export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product, quantity) => (dispatch, getState) => {
  console.log("Dispatching addToCart action:", { product, quantity });

  const { cart } = getState().shoppingCart;

  const existingProductIndex = cart.findIndex(
    (item) => item.product.id === product.id
  );

  if (existingProductIndex !== -1) {
    // Ürün sepette varsa, miktarı güncelle
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: {
        productId: product.id,
        count: cart[existingProductIndex].count + quantity,
      },
    });
  } else {
    // Ürün sepette değilse, yeni bir ürün ekle
    const newCartItem = {
      count: quantity,
      checked: true,
      product,
    };
    dispatch({
      type: ADD_TO_CART,
      payload: newCartItem,
    });
  }
};
export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});
export const updateCartItem = (productId, count) => ({
  type: "UPDATE_CART_ITEM",
  payload: { productId, count },
});
