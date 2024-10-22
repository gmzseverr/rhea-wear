import gravatarUrl from "gravatar-url";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API, renewAPI } from "../api/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    const avatarUrl = gravatarUrl(loginData.email, {
      size: "50",
      default: "retro",
    });

    const userWithAvatar = { ...loginData, avatarUrl };

    console.log("Sending request to API with:", userWithAvatar);

    API.post("/login", userWithAvatar)
      .then((res) => {
        renewAPI();
        console.log("login res:", res.data);

        if (loginData.remember) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.name || loginData.email);
        } else {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("userName", res.data.name || loginData.email);
        }

        dispatch({
          type: "SET_USER",
          payload: {
            name: res.data.name || loginData.email,
            email: loginData.email,
            avatarUrl: res.data.avatarUrl || avatarUrl,
          },
        });

        toast.success("Successfully logged in!");
        navigate(location?.state?.referrer || "/");
      })
      .catch((error) => {
        console.error("Login error:", error.response || error);
        toast.error("Login failed. Please check your credentials.");
      });
  };

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={loginSubmit}>
        <div className="p-2">
          <label>Email:</label>
          <input
            value={loginData.email}
            name="email"
            type="email"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="p-2">
          <label>Password:</label>
          <input
            value={loginData.password}
            name="password"
            type="password"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="p-2">
          <label>Remember Me</label>
          <input
            name="remember"
            checked={loginData.remember}
            type="checkbox"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className="" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
