import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setAddress } from "../redux/actions/shoppingCartActions";
import { Modal } from "react-bootstrap";
import { API } from "../api/api";

const AddressForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const addresses = useSelector((state) => state.shoppingCart.addresses);
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);

  const [addressData, setAddressData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    try {
      const response = await API.post(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        addressData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("Address added:", response.data);
      dispatch(setAddress(response.data));
      toast.success("Adres başarıyla kaydedildi");
      setAddressData({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
      });
      setIsAddAddressOpen(false);
    } catch (error) {
      console.error("Error saving address:", error);
      toast.error("Adres kaydedilirken bir hata oluştu");
    }
  };

  const fetchAddresses = async () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    try {
      const response = await API.get(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Fetched addresses:", response.data);
      if (Array.isArray(response.data)) {
        dispatch(setAddress(response.data));
      } else {
        console.error("Response data is not an array:", response.data);
        toast.error("Adres verisi beklenmedik bir biçimde geldi.");
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      toast.error("Adresleri alırken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
    console.log("Initial addresses:", addresses);
  }, []);

  return (
    <div className="">
      <button
        onClick={() => setIsAddAddressOpen(!isAddAddressOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Add Address
      </button>

      <Modal show={isAddAddressOpen} onHide={() => setIsAddAddressOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.keys(addressData).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  :
                </label>
                {key === "city" ? (
                  <select
                    name={key}
                    value={addressData[key]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Izmir">Izmir</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Bursa">Bursa</option>
                    <option value="Eskişehir">Eskişehir</option>
                  </select>
                ) : (
                  <input
                    type={key === "address" ? "textarea" : "text"}
                    name={key}
                    value={addressData[key]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddressForm;
