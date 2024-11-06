import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import SavedAddresses from "../components/SavedAddresses";
import PaymentForm from "../components/PaymentForm";
import FinalSummaryBox from "../components/FinalSummaryBox";
import { toast } from "react-toastify";
import CompletePayment from "../components/CompletePayment";

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const savedAddresses = useSelector(
    (state) => state.client.savedAddresses || []
  );
  const dispatch = useDispatch();
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);

  const handleBackToAddresses = () => {
    setCurrentStep(1);
    setSelectedAddressId(null);
  };

  const handleSelectAddress = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handleNextStep = () => {
    if (currentStep === 1 && selectedAddressId) {
      setCurrentStep(2);
    }
  };

  const handlePaymentComplete = (orderDetails) => {
    setOrderDetails(orderDetails);
    setCurrentStep(3); // Navigate to a success or confirmation page if needed
  };

  return (
    <div className="container mx-auto pt-32 sm:px-10 px-40">
      <h1 className="text-2xl font-bold mb-4 text-[#23A6F0]">Order Page</h1>
      <div className="flex justify-between items-center sm:flex sm:flex-col-reverse">
        <section>
          <div className="flex mb-4">
            <div
              className={`flex-1 p-4 ${
                currentStep === 1 ? "border-b-2 border-[#23A6F0]" : ""
              }`}
            >
              <h2 className="text-xl text-[#23A6F0]">Address Information</h2>
            </div>
            <div
              className={`flex-1 p-4 ${
                currentStep === 2 ? "border-b-2 border-[#23A6F0]" : ""
              }`}
            >
              <h2 className="text-xl text-[#23A6F0]">Payment Information</h2>
            </div>
          </div>

          {currentStep === 1 && (
            <div>
              <h2 className="text-xl mb-2">Saved Addresses</h2>
              <SavedAddresses
                onSelectAddress={handleSelectAddress}
                selectedAddressId={selectedAddressId}
              />
              <AddressForm />
              <button
                onClick={handleNextStep}
                className="bg-[#23A6F0] text-white px-4 py-2 rounded mt-4 ml-4"
                disabled={!selectedAddressId}
              >
                Save and Continue
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <button
                onClick={handleBackToAddresses}
                className="bg-gray-300 text-white px-4 py-2 rounded mt-4"
              >
                Back to Addresses
              </button>
              <PaymentForm setPaymentData={setPaymentData} />
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
              <label htmlFor="terms" className="text-[#737373]">
                I accept the terms and conditions
              </label>
            </div>
            <FinalSummaryBox />
            {currentStep === 2 && (
              <CompletePayment
                selectedAddressId={selectedAddressId}
                paymentData={paymentData}
                isAgreed={isAgreed}
                onComplete={handlePaymentComplete}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderPage;
