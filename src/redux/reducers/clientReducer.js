const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  roles: [],
  theme: "light",
  language: "en",
  addresses: [],
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          ...action.payload,
        },
        token: localStorage.getItem("token"),
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    case "SET_ADDRESS_LIST":
      return {
        ...state,
        addresses: action.payload,
      };

    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case "UPDATE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };

    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
