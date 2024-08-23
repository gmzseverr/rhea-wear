import axios from "axios";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
