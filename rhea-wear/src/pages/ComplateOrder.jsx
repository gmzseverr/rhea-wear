import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CompleteOrder = ({ orderDetails, onClose }) => {


  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success("Siparişiniz başarıyla tamamlandı!");
      navigate("/shop");
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, onClose]);


  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Sipariş Tamamlandı!</h2>
        <div className="spinner mb-4"></div>
        <h3 className="mb-2">Sipariş Detayları:</h3>
        <ul className="mb-4">
          {orderDetails.products.map((product) => (
            <li key={product.product_id}>
              {product.detail} - {product.count} adet
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            navigate("/shop");
            onClose();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default CompleteOrder;
