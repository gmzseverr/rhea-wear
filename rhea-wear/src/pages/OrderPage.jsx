import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import SavedAddresses from "../components/SavedAddresses";
import PaymentForm from "../components/PaymentForm";
import FinalSummaryBox from "../components/FinalSummaryBox";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../api/api";
import CompleteOrder from "./ComplateOrder";

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const savedAddresses = useSelector(
    (state) => state.client.savedAddresses || []
  );
  const dispatch = useDispatch();
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackToAddresses = () => {
    setCurrentStep(1);
    setSelectedAddressId(null);
  };

  const handleSelectAddress = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handleCompleteOrder = async () => {
    const cart = useSelector((state) => state.shoppingCart.cart);

    if (selectedAddressId && isAgreed) {
      try {
        // Sepetteki seçilen ürünleri al
        const selectedProducts = cart.filter((item) =>
          selectedItems.has(item.product.id)
        );

        // Toplam fiyat hesaplama
        const totalPrice = selectedProducts.reduce(
          (total, item) => total + item.count * item.product.price,
          0
        );

        // Ödeme bilgileri
        const paymentMethod = paymentData; // Ödeme formundan gelen bilgiler

        const orderData = {
          address_id: selectedAddressId,
          order_date: new Date().toISOString(),
          card_no: paymentMethod.card_no,
          card_name: paymentMethod.name_on_card,
          card_expire_month: paymentMethod.expire_month,
          card_expire_year: paymentMethod.expire_year,
          card_ccv: paymentMethod.ccv,
          price: totalPrice,
          products: selectedProducts.map((item) => ({
            product_id: item.product.id,
            count: item.count,
            detail: item.product.description, // veya başka bir detay
          })),
        };

        const response = await API.post("/order", orderData);
        setOrderDetails(orderData);
        setIsComplete(true);
        toast.success("Siparişiniz başarıyla oluşturuldu!");

        // Sepeti sıfırlama veya yönlendirme işlemi burada yapılabilir
      } catch (error) {
        console.error("Error creating order:", error);
        toast.error(
          "Sipariş oluşturulurken bir hata oluştu, lütfen tekrar deneyin."
        );
      }
    } else {
      toast.warn("Lütfen adres ve koşulları kabul edin.");
    }
  };

  return (
    <div className="container mx-auto pt-32 sm:px-10 px-40 ">
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
                className="bg-[#23A6F0] text-white px-4 py-2 rounded mt-4 ml-4"
                disabled={!selectedAddressId}
              >
                Next
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <PaymentForm setPaymentData={setPaymentData} />
              <div className="flex justify-between">
                <button
                  onClick={handleBackToAddresses}
                  className="bg-gray-300 text-white px-4 py-2 rounded mt-4"
                >
                  Back to Addresses
                </button>
                <button
                  onClick={handleCompleteOrder}
                  className="bg-[#23A6F0] text-white px-4 py-2 rounded mt-4"
                >
                  Complete Order
                </button>
                {isComplete && (
                  <CompleteOrder
                    orderDetails={orderDetails}
                    onClose={() => setIsComplete(false)}
                  />
                )}
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
              onClick={handleNextStep}
              className="bg-[#23A6F0] text-white py-2 px-4 rounded-md font-semibold hover:bg-sky-300"
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
