const initialShoppingCartState = {
  cart: [],
  payment: {},
  address: {},
};

function shoppingCartReducer(state = initialShoppingCartState, action) {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
}

export default shoppingCartReducer;
