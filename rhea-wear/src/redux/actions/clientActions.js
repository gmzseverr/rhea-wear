import axios from "axios";
import gravatarUrl from "gravatar-url";
import { toast } from "react-toastify";

export const loginUser = (credentials, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        {
          email: credentials.userName,
          password: credentials.password,
        }
      );
      const loginData = response.data;

      // Gravatar URL oluşturma
      const avatarUrl = gravatarUrl(credentials.userName, {
        size: "100",
        default: "retro",
      });

      // Kullanıcı bilgilerini güncelle
      const userWithAvatar = { ...loginData, avatarUrl };

      dispatch({ type: "SET_USER", payload: userWithAvatar });

      // Token'ı localStorage veya sessionStorage'a kaydet
      if (credentials.remember) {
        localStorage.setItem("token", loginData.token);
        localStorage.setItem("userName", credentials.userName); // kullanıcı adını da kaydediyoruz
      } else {
        sessionStorage.setItem("token", loginData.token);
        sessionStorage.setItem("userName", credentials.userName); // kullanıcı adını da kaydediyoruz
      }

      toast.success("Successfully logged in!");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    }
  };
};

export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
      return;
    }

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/roles"
      );
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    }
  };
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const clearUser = () => ({
  type: "CLEAR_USER",
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});
