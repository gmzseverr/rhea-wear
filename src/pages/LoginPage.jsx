import gravatarUrl from "gravatar-url";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API, renewAPI } from "../api/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    API.post("/login", userWithAvatar)
      .then((res) => {
        renewAPI();
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={loginSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full"
      >
        <h2 className="text-2xl font-semibold text-[#23A6F0] mb-6 text-center">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            value={loginData.email}
            name="email"
            type="email"
            onChange={changeHandler}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            value={loginData.password}
            name="password"
            type="password"
            onChange={changeHandler}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
          />
        </div>
        <div className="flex items-center mb-6">
          <input
            name="remember"
            checked={loginData.remember}
            type="checkbox"
            onChange={changeHandler}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Remember Me</label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#23A6F0] text-white font-bold py-2 rounded-md hover:bg-[#1d8fd1] transition duration-200"
        >
          Login
        </button>
        <div className="flex flex-col items-center mt-2">
          <p>or</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
            className="text-[#23A6F0] hover:underline"
          >
            Create New Account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
