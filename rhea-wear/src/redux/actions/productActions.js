// src/redux/actions/productActions.js

import axios from "axios";

const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
const SET_TOTAL = "SET_TOTAL";
const SET_FETCH_STATE = "SET_FETCH_STATE";
const SET_LIMIT = "SET_LIMIT";
const SET_OFFSET = "SET_OFFSET";
const SET_FILTER = "SET_FILTER";
const SET_BESTSELLERS = "SET_BESTSELLERS";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
export const setBestsellers = (bestsellers) => ({
  type: SET_BESTSELLERS,
  payload: bestsellers,
});

// Thunk Action to Fetch Products
export const fetchProducts =
  (limit = 25, offset = 0, filter = "") =>
  async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      const response = await axios.get(
        " https://workintech-fe-ecommerce.onrender.com/products",
        {
          // API endpoint burada belirtilmeli
          params: { limit, offset, filter },
        }
      );

      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Failed to fetch products:", error);
      dispatch(setFetchState("ERROR"));
    }
  };
