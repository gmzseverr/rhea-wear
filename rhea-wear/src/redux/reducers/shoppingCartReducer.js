import {
  SET_ADDRESS,
  DELETE_ADDRESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  UPDATE_ADDRESS,
  SET_PAYMENT,
  ADD_PAYMENT,
  DELETE_PAYMENT,
  UPDATE_PAYMENT,
  SELECT_ITEM,
  DESELECT_ITEM,
  SET_SELECTED_CARD,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  addresses: [],
  selectedItems: new Set(),
  paymentData: [],
  selectedCard: [],
  loading: false,
  error: null,
};

const shoppingCartReducer = (state = initialState, action) => {
  console.log("Reducer action:", action);

  switch (action.type) {
    case ADD_TO_CART:
      const { product, count: addCount } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, count: item.count + addCount }
            : item
        );

        console.log("Updated cart with existing product:", updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newCartItem = {
          count: addCount,
          checked: true,
          product,
        };
        const updatedCart = [...state.cart, newCartItem];

        console.log("Adding new product to cart:", newCartItem);
        return {
          ...state,
          cart: updatedCart,
        };
      }

    case UPDATE_CART_ITEM:
      const { productId, count } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, count } : item
      );

      console.log("Updated cart item:", updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );

      console.log("Cart after removal:", filteredCart);
      return {
        ...state,
        cart: filteredCart,
      };
    case "SELECT_ITEM":
      return {
        ...state,
        selectedItems: new Set(state.selectedItems).add(action.payload),
      };
    case "DESELECT_ITEM":
      const newSelectedItems = new Set(state.selectedItems);
      newSelectedItems.delete(action.payload);
      return {
        ...state,
        selectedItems: newSelectedItems,
      };

    //ADRESS
    case SET_ADDRESS:
      return {
        ...state,
        addresses: action.payload,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };

    //PAYMENT
    case SET_PAYMENT:
      return {
        ...state,
        paymentData: action.payload,
      };

    case ADD_PAYMENT:
      return {
        ...state,
        paymentData: [...state.paymentData, action.payload],
      };

    case DELETE_PAYMENT:
      return {
        ...state,
        paymentData: state.paymentData.filter(
          (payment) => payment.id !== action.payload
        ),
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        paymentData: state.paymentData.map((payment) =>
          payment.id === action.payload.id ? action.payload : payment
        ),
      };
    case SET_SELECTED_CARD:
      return {
        ...state,
        selectedCard: action.payload,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
