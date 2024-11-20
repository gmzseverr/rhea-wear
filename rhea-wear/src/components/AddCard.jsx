import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { API } from "../api/api";
import { setPayment } from "../redux/actions/shoppingCartActions";
import { useDispatch } from "react-redux";

const AddCard = ({ fetchSavedCards }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token not found. Please log in.");
      return;
    }

    const currentYear = new Date().getFullYear();
    if (
      data.expire_year < currentYear ||
      (data.expire_year === currentYear &&
        data.expire_month < new Date().getMonth() + 1)
    ) {
      toast.error("Invalid expiration date.");
      return;
    }

    try {
      const response = await API.post("/user/card", paymentData, {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
        },
      });

      dispatch(setPayment(response.data));
      toast.success("Card added successfully!");
      setIsAddPaymentOpen(false);
      reset();
      fetchSavedCards();
    } catch (error) {
      console.error("Error saving card:", error.response || error);
      toast.error("An error occurred while saving the card. Please try again.");
    }
  };

  return (
    <div>
      <span
        className="text-[#23A6F0] hover:underline cursor-pointer "
        onClick={() => setIsAddPaymentOpen(true)}
      >
        Add New Payment
      </span>
      <Modal show={isAddPaymentOpen} onHide={() => setIsAddPaymentOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-[#23A6F0]">Add Card</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <Cards
            number={paymentData.card_no}
            name={paymentData.name_on_card}
            expiry={`${paymentData.expire_month}/${paymentData.expire_year}`}
            focused={""}
          />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
            {/* Card Number */}
            <div className="mb-4">
              <label htmlFor="card_no" className="block text-sm font-bold mb-1">
                Card Number
              </label>
              <input
                type="text"
                id="card_no"
                {...register("card_no", {
                  required: "Card number is required.",
                  minLength: {
                    value: 16,
                    message: "Card number must be exactly 16 digits.",
                  },
                  maxLength: {
                    value: 16,
                    message: "Card number must be exactly 16 digits.",
                  },
                })}
                maxLength={16}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, card_no: e.target.value })
                }
                className="border border-gray-300 p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="1234 5678 9012 3456"
              />
              {errors.card_no && (
                <span className="text-red-500 text-xs italic">
                  {errors.card_no.message}
                </span>
              )}
            </div>

            {/* Name on Card */}
            <div className="mb-4">
              <label
                htmlFor="name_on_card"
                className="block text-sm font-bold mb-1"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="name_on_card"
                {...register("name_on_card", {
                  required: "Name on card is required.",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name on card must only contain letters.",
                  },
                })}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    name_on_card: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="John Doe"
              />
              {errors.name_on_card && (
                <span className="text-red-500 text-xs italic">
                  {errors.name_on_card.message}
                </span>
              )}
            </div>

            {/* Expiry Month */}
            <div className="mb-4">
              <label
                htmlFor="expire_month"
                className="block text-sm font-bold mb-1"
              >
                Expiry Month
              </label>
              <input
                type="number"
                id="expire_month"
                {...register("expire_month", {
                  required: "Expiry month is required.",
                  min: {
                    value: 1,
                    message: "Enter a valid month (1-12).",
                  },
                  max: {
                    value: 12,
                    message: "Enter a valid month (1-12).",
                  },
                })}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    expire_month: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="MM"
              />
              {errors.expire_month && (
                <span className="text-red-500 text-xs italic">
                  {errors.expire_month.message}
                </span>
              )}
            </div>

            {/* Expiry Year */}
            <div className="mb-4">
              <label
                htmlFor="expire_year"
                className="block text-sm font-bold mb-1"
              >
                Expiry Year
              </label>
              <input
                type="number"
                id="expire_year"
                {...register("expire_year", {
                  required: "Expiry year is required.",
                  min: {
                    value: new Date().getFullYear(),
                    message: "Enter the current or a future year.",
                  },
                })}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    expire_year: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="YYYY"
              />
              {errors.expire_year && (
                <span className="text-red-500 text-xs italic">
                  {errors.expire_year.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#23A6F0] text-white py-2 px-4 rounded-lg w-full hover:bg-[#1b8dc3] transition duration-200 shadow-lg"
            >
              Add Card
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddCard;
