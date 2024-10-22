import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";
import {
  deleteAddress,
  setAddress,
  updateAddress,
} from "../redux/actions/shoppingCartActions";
import { API } from "../api/api";

const SavedAddresses = ({ onSelectAddress, selectedAddressId }) => {
  const addresses = useSelector((state) => state.shoppingCart.addresses);
  const loading = useSelector((state) => state.shoppingCart.loading);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({});

  const fetchSavedAddress = async () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    try {
      const response = await API.get("/user/address", {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
        },
      });
      dispatch(setAddress(response.data));
    } catch (error) {
      console.error("Error fetching address data:", error);
      toast.error("Adres verileri alınırken hata oluştu.");
    }
  };

  useEffect(() => {
    fetchSavedAddress();
  }, []);

  const handleDeleteAddress = async (addressId) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    try {
      await API.delete(
        `https://workintech-fe-ecommerce.onrender.com/user/address/${addressId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch(deleteAddress(addressId));
      toast.success("Address removed successfully.");
    } catch (error) {
      console.error("Error deleting address:", error);
      toast.error("Adres silinirken hata oluştu.");
    }
  };

  const openEditForm = (address) => {
    setCurrentAddress(address);
    setIsEditing(true);
  };

  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) {
      toast.error("Token bulunamadı, lütfen giriş yapın.");
      return;
    }

    try {
      const response = await API.put(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        currentAddress,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch(updateAddress(response.data));
      setIsEditing(false);
      toast.success("Address updated.");
    } catch (error) {
      console.error("Error updating address:", error);
      toast.error("Address güncellenirken hata oluştu.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressSelect = (address) => {
    onSelectAddress(address.id);
  };

  return (
    <section>
      <div className="mt-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner animation="border" variant="primary" />
            <span className="ml-2">Yükleniyor...</span>
          </div>
        ) : addresses && addresses.length > 0 ? (
          addresses.map((address) => (
            <div key={address.id} className="border p-4 rounded-md mt-2">
              <section
                className={`flex flex-col ${
                  selectedAddressId === address.id ? "bg-blue-100" : ""
                } p-2`}
                onClick={() => handleAddressSelect(address)}
              >
                <h4 className="font-bold">{address.title}</h4>
                <p>
                  {address.name} {address.surname}
                </p>
                <p>{address.phone}</p>
                <p>
                  {address.city}, {address.district}, {address.neighborhood}
                </p>
                <p>{address.address}</p>
              </section>
              <section className="flex gap-2 pb-3 justify-end ">
                <FontAwesomeIcon
                  className="text-gray-400 hover:text-blue-400 hover:cursor-pointer"
                  icon={faPenToSquare}
                  onClick={() => openEditForm(address)}
                />
                <FontAwesomeIcon
                  className="text-gray-400 hover:text-blue-400 hover:cursor-pointer"
                  icon={faTrashCan}
                  onClick={() => handleDeleteAddress(address.id)}
                />
              </section>
            </div>
          ))
        ) : (
          <p>Address not found.</p>
        )}
      </div>

      {/* Update Modal */}
      <Modal
        show={isEditing}
        onHide={() => {
          setIsEditing(false);
          setCurrentAddress({});
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateAddress}>
            <div className="flex flex-col">
              <label className="mt-2">Title:</label>
              <input
                type="text"
                name="title"
                value={currentAddress.title || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <label className="mt-2">Name:</label>
              <input
                type="text"
                name="name"
                value={currentAddress.name || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <label className="mt-2">Surname:</label>
              <input
                type="text"
                name="surname"
                value={currentAddress.surname || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <label className="mt-2">Phone:</label>
              <input
                type="text"
                name="phone"
                value={currentAddress.phone || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <label className="mt-2">City:</label>
              <select
                name="city"
                value={currentAddress.city || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
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

              <label className="mt-2">District:</label>
              <input
                type="text"
                name="district"
                value={currentAddress.district || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <label className="mt-2">Neighborhood:</label>
              <input
                type="text"
                name="neighborhood"
                value={currentAddress.neighborhood || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <label className="mt-2">Address:</label>
              <textarea
                name="address"
                value={currentAddress.address || ""}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <Button variant="primary" type="submit" className="mt-4">
                Update Address
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default SavedAddresses;
