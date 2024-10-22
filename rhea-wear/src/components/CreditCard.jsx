import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") setNumber(value);
    if (name === "name") setName(value);
    if (name === "expiry") setExpiry(value);
    if (name === "cvc") setCvc(value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={""}
        />
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">Card Number</label>
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="John Doe"
            />
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-1">
              <label className="block text-sm font-bold mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiry"
                value={expiry}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2 pl-1">
              <label className="block text-sm font-bold mb-1">CVC</label>
              <input
                type="text"
                name="cvc"
                value={cvc}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
                placeholder="123"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCard;
