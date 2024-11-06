import React from "react";

const CompleteOrder = ({ orderDetails, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className="text-2xl font-bold text-center mb-4 text-[#23A6F0]">
          Sipariş Başarıyla Tamamlandı!
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Alınan Ürünler:</h3>
          <ul className="mt-2 space-y-2">
            {orderDetails.products.map((product, index) => (
              <li key={index} className="border-b pb-2">
                <span className="font-semibold">Ürün:</span> {product.detail}{" "}
                <br />
                <span className="font-semibold">Adet:</span> {product.count}{" "}
                <br />
                <span className="font-semibold">Ürün ID:</span>{" "}
                {product.product_id}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-lg font-semibold text-center mb-4">
          Toplam Tutar: {orderDetails.price}₺
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-[#23A6F0] text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-300"
          >
            Alışverişe Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteOrder;
