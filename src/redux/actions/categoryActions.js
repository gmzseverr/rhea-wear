import axios from "axios";

const SET_CATEGORIES = "SET_CATEGORIES";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/categories"
    );
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
};
