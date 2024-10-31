import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Rolleri getirmek için API çağrısı
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await API.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  // Form gönderildiğinde çalışacak fonksiyon
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (data.role_id === "2") {
        data.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }
      await API.post("/signup", data);
      alert("You need to click link in email to activate your account!");
      navigate(-1); // Bir önceki sayfaya yönlendir
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("An error occurred during sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedRole = watch("role_id");

  return (
    <div className="pt-32 sm:px-10 px-40 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              minLength: 3,
            })}
            className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password with at least 8 characters"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message:
                  "Password must include upper and lower case letters, a number, and a special character",
              },
            })}
            className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Password Validation Field */}
        <div className="mb-4">
          <label
            htmlFor="passwordConfirm"
            className="block text-gray-700 font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            id="passwordConfirm"
            type="password"
            {...register("passwordConfirm", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm">
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label
            htmlFor="role_id"
            className="block text-gray-700 font-bold mb-2"
          >
            Role
          </label>
          <select
            id="role_id"
            defaultValue="3"
            {...register("role_id")}
            className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Store-specific fields */}
        {selectedRole === "2" && (
          <>
            <div className="mb-4">
              <label
                htmlFor="store_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Store Name
              </label>
              <input
                id="store_name"
                placeholder=" Store name should be at least 3 characters"
                {...register("store_name", {
                  required: "Store Name is required",
                  minLength: 3,
                })}
                className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.store_name && (
                <p className="text-red-500 text-sm">
                  {errors.store_name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="store_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Store Phone
              </label>
              <input
                id="store_phone"
                placeholder="Phone number should be valid Türkiye phone number"
                {...register("store_phone", {
                  required: "Store Phone is required",
                  pattern: {
                    value: /^05\d{9}$/,
                    message: "Invalid Türkiye phone number",
                  },
                })}
                className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.store_phone && (
                <p className="text-red-500 text-sm">
                  {errors.store_phone.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="store_tax_no"
                className="block text-gray-700 font-bold mb-2"
              >
                Store Tax ID
              </label>
              <input
                id="store_tax_no"
                {...register("store_tax_no", {
                  required: "Store Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Tax ID should match the pattern TXXXXVXXXXXX",
                  },
                })}
                className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.store_tax_no && (
                <p className="text-red-500 text-sm">
                  {errors.store_tax_no.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="store_bank_account"
                className="block text-gray-700 font-bold mb-2"
              >
                Store Bank Account
              </label>
              <input
                id="store_bank_account"
                {...register("store_bank_account", {
                  required: "Store Bank Account is required",
                  pattern: {
                    value: /^[A-Z0-9]{26}$/,
                    message: "Invalid IBAN",
                  },
                })}
                className="w-[450px] h-[50px] p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.store_bank_account && (
                <p className="text-red-500 text-sm">
                  {errors.store_bank_account.message}
                </p>
              )}
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-[450px] h-[50px] bg-[#23A6F0] text-white font-bold py-2 px-4 rounded-[5px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
