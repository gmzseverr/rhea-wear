import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/1clientactions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const YeniForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/login", {
        email: data.email,
        password: data.password,
      });

      dispatch(setUser(response.data.user, response.data.token));
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register("email")} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register("password")} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default YeniForm;
