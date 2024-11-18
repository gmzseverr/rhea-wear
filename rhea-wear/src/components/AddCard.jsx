import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import Cards from "react-credit-cards-2";
import { API } from "../api/api";
import { setPayment } from "../redux/actions/shoppingCartActions";
import { useDispatch } from "react-redux";

const AddCard = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [cards, setCards] = useState([]);
  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(savedCards);
  };

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    const currentYear = new Date().getFullYear();
    if (
      data.expire_year < currentYear ||
      (data.expire_year === currentYear &&
        data.expire_month < new Date().getMonth() + 1)
    ) {
      toast.error("Kartın son kullanma tarihi geçersiz.");
      return;
    }

    try {
      const response = await API.post("/user/card", paymentData, {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
        },
      });

      const newCard = {
        card_no: data.card_no,
        expire_month: data.expire_month,
        expire_year: data.expire_year,
        name_on_card: data.name_on_card,
      };

      const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
      savedCards.push(newCard);
      localStorage.setItem("cards", JSON.stringify(savedCards));
      dispatch(setPayment(response.data));

      toast.success("Kart başarıyla eklendi!");
      setIsAddPaymentOpen(false);
      reset();
    } catch (error) {
      toast.error(
        "Kart kaydedilirken bir hata oluştu: " +
          (error.response?.data?.message || "Lütfen tekrar deneyin.")
      );
    }
  };

  return (
    <div>
      <span
        className="text-[#23A6F0] hover:underline cursor-pointer"
        onClick={() => setIsAddPaymentOpen(true)}
      >
        Yeni ödeme ekle
      </span>
      <Modal show={isAddPaymentOpen} onHide={() => setIsAddPaymentOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-[#23A6F0]">Kart Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          {/* Card preview with animation */}
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
                  required: true,
                  minLength: 16,
                  maxLength: 16,
                })}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, card_no: e.target.value })
                }
                className="border border-gray-300 p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="1234 5678 9012 3456"
              />
              {errors.card_no && (
                <span className="text-red-500 text-sm">
                  Kart numarası gerekli ve 16 haneli olmalıdır.
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
                {...register("name_on_card", { required: true })}
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
                <span className="text-red-500 text-sm">
                  Kart üzerindeki isim gereklidir.
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
                  required: true,
                  min: 1,
                  max: 12,
                })}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    expire_month: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="AA"
              />
              {errors.expire_month && (
                <span className="text-red-500 text-sm">Geçerli ay giriniz</span>
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
                  required: true,
                  min: new Date().getFullYear(),
                })}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    expire_year: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="YY"
              />
              {errors.expire_year && (
                <span className="text-red-500 text-sm">
                  Mevcut veya gelecekteki bir yıl giriniz
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
