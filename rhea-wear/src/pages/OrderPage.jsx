import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressForm from "../components/AddressForm";
import SavedAddresses from "../components/SavedAddresses";
import SavedPayment from "../components/SavedPayment";
import FinalSummaryBox from "../components/FinalSummaryBox";
import OrderSummaryModal from "../components/OrderSummaryModal";
import { toast } from "react-toastify";
import { API } from "../api/api";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderSummary, setOrderSummary] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { selectedItems, totalPrice } = location.state || {};

  const savedAddresses = useSelector(
    (state) => state.client.savedAddresses || []
  );
  const dispatch = useDispatch();

  const handleSelectAddress = (addressId) => setSelectedAddressId(addressId);

  const handleCardSelect = (card) => setSelectedCard(card);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    if (!selectedCard) {
      toast.error("Lütfen bir kredi kartı seçin.");
      setLoading(false);
      return;
    }

    if (!isAgreed) {
      toast.error("Lütfen şartları ve koşulları kabul edin.");
      setLoading(false);
      return;
    }

    const orderPayload = {
      address_id: selectedAddressId,
      card_no: selectedCard.card_no,
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      price: totalPrice,
      products: selectedItems.map((item) => ({
        product_id: item?.id,
        count: item?.count,
        detail: item?.name,
      })),
    };

    try {
      const response = await API.post("/order", orderPayload, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setOrderSummary(orderPayload.products);
      setIsModalOpen(true);
      console.log(orderPayload);
    } catch (err) {
      console.error("Payment Error:", err);
      toast.error("Ödeme işlemi sırasında bir hata oluştu.");
      setError("Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && selectedAddressId) {
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="container mx-auto pt-32 sm:px-10 px-40 flex justify-between items-center ">
      <div className="flex justify-between sm:flex-col-reverse">
        <section className="flex-1">
          {/* Step Indicators */}
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
              <h2 className="text-xl text-[#23A6F0]">Payment</h2>
            </div>
          </div>

          {/* Step 1: Address Selection */}
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
                className="bg-[#23A6F0] text-white px-4 py-2 rounded mt-4"
                disabled={!selectedAddressId}
              >
                Save and Continue
              </button>
            </div>
          )}

          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <div>
              <SavedPayment onCardSelect={handleCardSelect} />
              <div className="my-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                  />
                  <span> I accept the terms and conditions</span>
                </label>
              </div>
              <button
                onClick={handlePayment}
                disabled={loading || !isAgreed}
                className={`bg-[#23A6F0] text-white px-4 py-2 rounded mt-4 ${
                  !isAgreed ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Processing..." : "Complete Payment"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          )}
        </section>

        {/* Summary Section */}
      </div>

      {/* Order Summary Modal */}
      <OrderSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderSummary={orderSummary}
      />
      <section className=" sm:mt-4">
        <FinalSummaryBox />
      </section>
    </div>
  );
};

export default OrderPage;
