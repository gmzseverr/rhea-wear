import { toast } from "react-toastify";

import gravatarUrl from "gravatar-url";
import { API } from "../../api/api";

export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setLogin = () => ({ type: "SET_LOGIN" });
export const setLogout = () => ({ type: "SET_LOGOUT" });

//USER//
export const setUser = (dispatch, userData) => {
  dispatch({
    type: "SET_USER",
    payload: {
      name: userData.name || userData.email,
      email: userData.email,
      avatarUrl:
        userData.avatarUrl ||
        gravatarUrl(userData.email, {
          size: "50",
          default: "retro",
        }),
    },
  });
};

export const clearUser = () => ({
  type: "CLEAR_USER",
});

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });

    toast.success("Successfully logged out!");
  };
};

export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
      return;
    }

    try {
      const response = await API.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    }
  };
};

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
