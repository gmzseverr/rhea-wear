import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";
import { toast } from "react-toastify";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roles = useSelector((state) => state.client.roles);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const selectedRole = watch("role_id");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!roles.length) {
      dispatch(fetchRoles());
    }
  }, [dispatch, roles.length]);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setLoading(true);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
        ...(data.role_id === "store" && {
          store: {
            name: data.storeName,
            phone: data.storePhone,
            tax_no: data.storeTaxID,
            bank_account: data.storeBankAccount,
          },
        }),
      };

      const response = await API.post("/signup", payload);
      console.log("Signup Data:", response.data);

      // Kullanıcı kaydı başarılıysa aktivasyon e-postası gönderildiğini belirten bir mesaj göster
      toast.success(
        "Registration successful! Please check your email to activate your account."
      );
      navigate("/login"); // Kullanıcıyı giriş sayfasına yönlendir
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      toast.error("Signup failed. Please check your input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-[#23A6F0] mb-6">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: 3,
            })}
            className={`mt-1 block w-full border rounded-lg p-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+\.\S+$/,
            })}
            className={`mt-1 block w-full border rounded-lg p-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            className={`mt-1 block w-full border rounded-lg p-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password:</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className={`mt-1 block w-full border rounded-lg p-2 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Role:</label>
          <select
            {...register("role_id", { required: "Role is required" })}
            defaultValue=""
            className={`mt-1 block w-full border rounded-lg p-2 ${
              errors.role_id ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <p className="text-red-500 text-sm">{errors.role_id.message}</p>
          )}
        </div>

        {selectedRole === "store" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Store Name:</label>
              <input
                {...register("storeName", {
                  required:
                    selectedRole === "store" ? "Store Name is required" : false,
                  minLength: {
                    value: 3,
                    message: "Store Name must be at least 3 characters long",
                  },
                })}
                className={`mt-1 block w-full border rounded-lg p-2 ${
                  errors.storeName ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
              />
              {errors.storeName && (
                <p className="text-red-500 text-sm">
                  {errors.storeName.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Store Phone:</label>
              <input
                {...register("storePhone", {
                  pattern: {
                    value: /^(\+90|0)?5\d{9}$/,
                    message: "Please enter a valid Türkiye phone number.",
                  },
                })}
                className={`mt-1 block w-full border rounded-lg p-2 ${
                  errors.storePhone ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
              />
              {errors.storePhone && (
                <p className="text-red-500 text-sm">
                  {errors.storePhone.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Store Tax ID:</label>
              <input
                {...register("storeTaxID", {
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Tax ID must match the pattern TXXXXVXXXXXX.",
                  },
                })}
                className={`mt-1 block w-full border rounded-lg p-2 ${
                  errors.storeTaxID ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
              />
              {errors.storeTaxID && (
                <p className="text-red-500 text-sm">
                  {errors.storeTaxID.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Store Bank Account:</label>
              <input
                {...register("storeBankAccount", {
                  pattern: {
                    value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                    message: "Please enter a valid IBAN.",
                  },
                })}
                className={`mt-1 block w-full border rounded-lg p-2 ${
                  errors.storeBankAccount ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
              />
              {errors.storeBankAccount && (
                <p className="text-red-500 text-sm">
                  {errors.storeBankAccount.message}
                </p>
              )}
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white bg-[#23A6F0] hover:bg-[#1e8cc3] transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? <span className="spinner" /> : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
