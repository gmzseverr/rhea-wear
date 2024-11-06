import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { updatePayment } from "../redux/actions/shoppingCartActions";
import { useDispatch } from "react-redux";

function SavedPayment() {
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardDetails, setCardDetails] = useState({});

  const dispatch = useDispatch();

  const openEditForm = (card) => {
    setCurrentCard(card);
    setCardDetails({
      card_no: card.card_no,
      name_on_card: card.name_on_card,
      expire_month: card.expire_month,
      expire_year: card.expire_year,
    });
    setIsEditing(true);
  };

  const fetchSavedCards = async () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    try {
      const response = await API.get("/user/card", {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
        },
      });

      console.log("API Response:", response);
      setSavedCards(response.data);
    } catch (error) {
      console.error(
        "Kartlar alınırken bir hata oluştu:",
        error.response || error
      );
      toast.error("Kayıtlı kartlar alınamadı.");
    }
  };

  useEffect(() => {
    fetchSavedCards();
  }, []);

  const maskCardNumber = (cardNumber) => {
    return `**** **** **** ${cardNumber.slice(-4)}`;
  };

  const handleCardSelect = (id) => {
    const selectedCard = savedCards.find((card) => card.id === id);
    setSelectedCardId(id === selectedCardId ? null : id);
    onCardSelect(selectedCard);
  };

  const handleDeletePayment = async (paymentId) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    try {
      await API.delete(`/user/card/${paymentId}`, {
        headers: {
          Authorization: token,
        },
      });
      setSavedCards(savedCards.filter((card) => card.id !== paymentId));
      toast.success("Kart başarıyla silindi.");
    } catch (error) {
      console.error("Ödeme silinirken hata:", error);
      toast.error("Ödeme silinirken hata oluştu.");
    }
  };

  const updatePaymentCard = async () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    const cardData = {
      id: currentCard.id,
      card_no: cardDetails.card_no,
      expire_month: cardDetails.expire_month,
      expire_year: cardDetails.expire_year,
      name_on_card: cardDetails.name_on_card,
    };

    try {
      const response = await API.put(`/user/card`, cardData, {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
        },
      });

      console.log("API Response data:", response.data);

      const updatedCard = response.data;

      const updatedCards = savedCards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      );

      console.log("Updated cards:", updatedCards);

      setSavedCards(updatedCards);
      dispatch(updatePayment(updatedCard));
      console.log("Payment updated with:", updatedCard);
      fetchSavedCards();
      toast.success("Kart bilgileri başarıyla güncellendi.");
      setIsEditing(false);
    } catch (error) {
      console.error("Kart güncellenirken hata:", error);
      toast.error("Kart güncellenirken hata oluştu.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="saved-payments p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
        Kayıtlı Kredi Kartları
      </h2>

      {savedCards.length > 0 ? (
        <div className="place-content-start gap-4 sm:gap-6">
          {savedCards.map((card) => (
            <div
              key={card.id}
              className={`p-4 sm:p-5 border rounded-lg shadow-md transition-all transform hover:scale-105 cursor-pointer ${
                selectedCardId === card.id
                  ? "bg-[#23A6F0] border-[#23A6F0] text-white ring-2 ring-[#23A6F0]"
                  : "bg-white border-gray-300 hover:shadow-lg hover:border-[#23A6F0]"
              }`}
              onClick={() => handleCardSelect(card.id)}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  size="2x"
                  className={`${
                    selectedCardId === card.id ? "text-white" : "text-gray-600"
                  }`}
                />
                <div>
                  <p
                    className={`font-semibold text-base sm:text-lg ${
                      selectedCardId === card.id
                        ? "text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {maskCardNumber(card.card_no)}
                  </p>
                  <p
                    className={`${
                      selectedCardId === card.id
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {card.name_on_card}
                  </p>
                  <p
                    className={`${
                      selectedCardId === card.id
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >{`${card.expire_month}/${card.expire_year}`}</p>
                </div>
              </div>

              <section className="flex gap-3 justify-end mt-4">
                <FontAwesomeIcon
                  className="text-gray-400 hover:text-blue-400 hover:cursor-pointer"
                  icon={faPenToSquare}
                  onClick={() => openEditForm(card)}
                />
                <FontAwesomeIcon
                  className="text-gray-400 hover:text-blue-400 hover:cursor-pointer"
                  icon={faTrashCan}
                  onClick={() => handleDeletePayment(card.id)}
                />
              </section>
            </div>
          ))}
        </div>
      ) : (
        <p>Henüz kayıtlı bir kredi kartınız yok.</p>
      )}

      {isEditing && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Update Payment</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  name="card_no"
                  value={maskCardNumber(cardDetails.card_no)}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Kart Üzerindeki İsim
                </label>
                <input
                  type="text"
                  name="name_on_card"
                  value={cardDetails.name_on_card}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="flex gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Ay
                  </label>
                  <input
                    type="text"
                    name="expire_month"
                    value={cardDetails.expire_month}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Yıl
                  </label>
                  <input
                    type="text"
                    name="expire_year"
                    value={cardDetails.expire_year}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={updatePaymentCard}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Güncelle
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedPayment;
