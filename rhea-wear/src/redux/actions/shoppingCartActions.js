export const SET_PAYMENT = "SET_PAYMENT";
export const ADD_PAYMENT = "ADD_PAYMENT";
export const DELETE_PAYMENT = "DELETE_PAYMENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const SET_SELECTED_CARD = "SET_SELECTED_CARD";

export const SET_ADDRESS = "SET_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SELECT_ITEM = "SELECT_ITEM";
export const DESELECT_ITEM = "DESELECT_ITEM";
export const ORDER_SUCCESS = "ORDER_SUCCESS";

export const addToCart = (product, quantity) => (dispatch, getState) => {
  console.log("Dispatching addToCart action:", { product, quantity });

  const { cart } = getState().shoppingCart;

  const existingProductIndex = cart.findIndex(
    (item) => item.product.id === product.id
  );

  if (existingProductIndex !== -1) {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: {
        productId: product.id,
        count: cart[existingProductIndex].count + quantity,
      },
    });
  } else {
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

export const selectItem = (productId) => ({
  type: "SELECT_ITEM",
  payload: productId,
});

export const deselectItem = (productId) => ({
  type: "DESELECT_ITEM",
  payload: productId,
});
export const orderSuccess = (orderData) => ({
  type: "ORDER_SUCCESS",
  payload: orderData,
});

///ADRES

export const setAddress = (addresses) => ({
  type: SET_ADDRESS,
  payload: addresses,
});
export const deleteAddress = (addressId) => {
  return {
    type: DELETE_ADDRESS,
    payload: addressId,
  };
};
export const updateAddress = (address) => {
  return {
    type: UPDATE_ADDRESS,
    payload: address,
  };
};

//PAYMENT
export const setPayment = (paymentData) => {
  return {
    type: SET_PAYMENT,
    payload: paymentData,
  };
};

export const addPayment = (paymentData) => {
  return {
    type: ADD_PAYMENT,
    payload: paymentData,
  };
};

export const deletePayment = (paymentId) => {
  return {
    type: DELETE_PAYMENT,
    payload: paymentId,
  };
};
export const updatePayment = (payment) => {
  return {
    type: UPDATE_PAYMENT,
    payload: payment,
  };
};
export const setSelectedCard = (card) => ({
  type: SET_SELECTED_CARD,
  payload: card,
});
