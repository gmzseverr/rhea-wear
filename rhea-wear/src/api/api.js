import axios from "axios";

export const createApiInstance = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    headers: {
      Authorization: token,
      "X-USER-ROLE": "client",
      "X-LANG": "TR",
      "Content-Type": "application/json",
    },
  });
};

export let API = createApiInstance();

export const renewAPI = () => {
  API = createApiInstance();
};
