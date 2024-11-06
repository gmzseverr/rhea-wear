import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../api/api";

const OrderSummaryModal = ({ isOpen, onClose, orderSummary }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <ul>
          {orderSummary.map((item, index) => (
            <li key={index} className="mb-2">
              {item.count} x {item.detail} (Product ID: {item.product_id})
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CompletePayment = ({
  selectedAddressId,
  isAgreed,
  selectedCard,
  onComplete,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderSummary, setOrderSummary] = useState([]);
  const currentDate = new Date();
  const orderDate = currentDate.toISOString();

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    if (!selectedCard) {
      toast.error("Lütfen bir kredi kartı seçin.");
      setLoading(false);
      return;
    }

    const orderPayload = {
      address_id: selectedAddressId,
      order_date: orderDate,
      card_no: selectedCard.card_no,
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: "321",
      price: 1919,
      products: [
        {
          product_id: 12,
          count: 1,
          detail: "açık mavi - xl",
        },
        {
          product_id: 13,
          count: 2,
          detail: "siyah - lg",
        },
      ],
    };

    try {
      const response = await API.post("/order", orderPayload, {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
          "X-LANG": "TR",
          "Content-Type": "application/json",
        },
      });

      console.log("Added");
      console.log("Response Data:", response.data);

      // Set order summary to show in the modal
      setOrderSummary(orderPayload.products);
      setIsModalOpen(true); // Open the modal
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error(
        "An error occurred while processing your payment. Please try again."
      );
      setError("Payment failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        className="bg-[#23A6F0] text-white px-4 py-2 rounded mt-4"
        disabled={loading || !isAgreed}
      >
        {loading ? "Processing..." : "Complete Payment"}
      </button>
      {error && <p className="text-red-500">{error}</p>}

      {/* Modal for Order Summary */}
      <OrderSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderSummary={orderSummary}
      />
    </div>
  );
};

export default CompletePayment;
