const initialProductState = {
  categories: [],
  productList: [],
  total: 0,
  sortOption: "",
  limit: 25,
  offset: 0,
  currentPage: 1,
  filter: "",
  fetchState: "NOT_FETCHED",
  bestsellers: [],
  productDetail: null,
  likedProducts: [],
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    case "SET_LIMIT":
      return { ...state, limit: action.payload };
    case "SET_OFFSET":
      return { ...state, offset: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_BESTSELLERS":
      return { ...state, bestsellers: action.payload };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
        offset: (action.payload - 1) * state.limit,
      };
    case "SET_SORT_OPTION":
      return { ...state, sortOption: action.payload };
    case "SET_PRODUCT_DETAIL":
      return { ...state, productDetail: action.payload };
    case "SET_LIKED_PRODUCTS":
      return { ...state, likedProducts: action.payload };

    case "ADD_TO_LIKED_PRODUCTS":
      const updatedLiked = [...state.likedProducts, action.payload];
      localStorage.setItem("likedProducts", JSON.stringify(updatedLiked));
      return { ...state, likedProducts: updatedLiked };

    case "REMOVE_FROM_LIKED_PRODUCTS":
      const filteredLiked = state.likedProducts.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("likedProducts", JSON.stringify(filteredLiked));
      return { ...state, likedProducts: filteredLiked };

    default:
      return state;
  }
};
