import axios from "axios";
import {
  SET_PRODUCT_DETAIL,
  FETCH_PRODUCT_DETAIL_REQUEST,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILURE,
} from "./productActions";

// Product detail fetch action
export const fetchProductDetail = (productId) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_DETAIL_REQUEST });

  try {
    const response = await axios.get(
      `https://workintech-fe-ecommerce.onrender.com/products/${productId}`
    );
    dispatch({
      type: FETCH_PRODUCT_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_DETAIL_FAILURE,
      payload: error.message,
    });
  }
};
