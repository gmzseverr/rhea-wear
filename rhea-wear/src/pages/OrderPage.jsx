import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import SavedAddresses from "../components/SavedAddresses";
import PaymentForm from "../components/PaymentForm";
import FinalSummaryBox from "../components/FinalSummaryBox";

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const savedAddresses = useSelector(
    (state) => state.client.savedAddresses || []
  );
  const dispatch = useDispatch();
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false); // State for checkbox

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackToAddresses = () => {
    setCurrentStep(1);
    setSelectedAddressId(null);
  };
  const handleContinue = () => {
    if (isAgreed) {
      navigate("/order");
    } else {
      alert("Please accept the terms and conditions to proceed.");
    }
  };

  const handleSelectAddress = (addressId) => {
    setSelectedAddressId(addressId);
  };

  return (
    <div className="container mx-auto pt-32 sm:px-10 px-40 ">
      <h1 className="text-2xl font-bold mb-4 ">Order Page</h1>
      <div className="flex justify-between items-center sm:flex sm:flex-col-reverse">
        <section>
          <div className="flex mb-4">
            <div
              className={`flex-1 p-4 ${
                currentStep === 1 ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <h2 className="text-xl">Address Information</h2>
            </div>
            <div
              className={`flex-1 p-4 ${
                currentStep === 2 ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <h2 className="text-xl">Payment Information</h2>
            </div>
          </div>

          {currentStep === 1 && !isAddingNewAddress && (
            <div>
              <h2 className="text-xl mb-2">Saved Addresses</h2>
              <SavedAddresses
                onSelectAddress={handleSelectAddress}
                selectedAddressId={selectedAddressId}
              />
              <AddressForm />

              <button
                onClick={handleNextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 ml-4"
                disabled={!selectedAddressId}
              >
                Next
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <PaymentForm />
              <div className="flex justify-between">
                <button
                  onClick={handleBackToAddresses}
                  className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                >
                  Back to Addresses
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                >
                  Complete Order
                </button>
              </div>
            </div>
          )}
        </section>
        <section>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center mb-4 rounded-md border px-4 py-4 shadow-md">
              <input
                type="checkbox"
                id="terms"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-[#737373] ">
                I accept the terms and conditions
              </label>
            </div>
            <FinalSummaryBox />
            <button
              onClick={handleContinue}
              className=" bg-[#23A6F0] text-white py-2 px-4 rounded-md font-semibold hover:bg-sky-300"
            >
              Save and Continue
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderPage;
