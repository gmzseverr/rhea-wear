import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromLikedProducts } from "../redux/actions/productActions";

const LikedProducts = () => {
  const likedProducts = useSelector((state) => state.product.likedProducts);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromLikedProducts(productId));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Liked Products
        </h2>

        {likedProducts.length === 0 ? (
          <p className="text-gray-600">You haven't liked any products yet.</p>
        ) : (
          <div className="space-y-6">
            {likedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-6"
              >
                {/* Resim */}
                <img
                  src={
                    product.images && product.images[0]
                      ? product.images[0].url
                      : "https://via.placeholder.com/150"
                  }
                  alt={product.name}
                  className="w-40 h-40 object-contain rounded"
                />

                {/* Bilgi + Buton alanı */}
                <div className="flex flex-1 justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-2">${product.price}</p>
                  </div>

                  <button
                    onClick={() => handleRemove(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Remove from Liked
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedProducts;
