import React from "react";

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

export default OrderSummaryModal;
