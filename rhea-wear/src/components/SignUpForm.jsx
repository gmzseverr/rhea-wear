// SignupForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import axiosInstance from "../axiosInstance.js";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const password = watch("password");

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/signup", formData);
      // Handle successful signup (e.g., redirect)
      console.log("Signup successful!", response.data);
      // Redirect logic here
    } catch (error) {
      // Handle signup error
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name", { required: true, minLength: 3 })} />
      {errors.name && (
        <span>Name is required and must be at least 3 characters long.</span>
      )}

      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <span>Email is required and must be a valid email address.</span>
      )}

      <label>Password</label>
      <input
        type="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password && (
        <span>
          Password is required and must be at least 8 characters long.
        </span>
      )}

      <label>Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: true,
          validate: (value) => value === password,
        })}
      />
      {errors.confirmPassword && <span>Passwords must match.</span>}

      <label>Role</label>
      <select {...register("role_id", { required: true })}>
        <option value="1">Customer</option>
        <option value="2">Admin</option>
        <option value="3">Store</option>
      </select>

      {watch("role_id") === "3" && (
        <>
          <label>Store Name</label>
          <input
            {...register("store.name", { required: true, minLength: 3 })}
          />
          {errors["store.name"] && (
            <span>
              Store name is required and must be at least 3 characters long.
            </span>
          )}

          <label>Store Phone</label>
          <input
            {...register("store.phone", {
              required: true,
              pattern: /^(\+90|0)?\d{10}$/,
            })}
          />
          {errors["store.phone"] && (
            <span>Enter a valid Turkish phone number.</span>
          )}

          <label>Store Tax ID</label>
          <input
            {...register("store.tax_no", {
              required: true,
              pattern: /^T\d{6}V\d{6}$/,
            })}
          />
          {errors["store.tax_no"] && (
            <span>Enter a valid tax ID in the format TXXXXVXXXXXX.</span>
          )}

          <label>Store Bank Account</label>
          <input {...register("store.bank_account", { required: true })} />
          {errors["store.bank_account"] && (
            <span>Enter a valid IBAN address.</span>
          )}
        </>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}

export default SignUpForm;
