import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "../redux/actions/shoppingCartActions";
import axios from "axios";
import { toast } from "react-toastify";

import SavedPayment from "./SavedPayment";
import AddCard from "./AddCard";

const PaymentForm = () => {
  const cards = useSelector((state) => state.shoppingCart.paymentData);
  const dispatch = useDispatch();

  const [paymentData, setPaymentData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSavedCardPayment = () => {
    toast.info("Kayıtlı kart ile ödeme yapılıyor...");
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <SavedPayment />
      <AddCard />
    </div>
  );
};

export default PaymentForm;