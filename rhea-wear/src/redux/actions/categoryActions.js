// src/store/actions/categoryActions.js
import axios from "axios";

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/categories"
    );
    dispatch({ type: "SET_CATEGORIES", payload: response.data });
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
};
