// src/components/ProductCardForBackend.jsx
import React from "react";
import { Link } from "react-router-dom";

function ProductCardForBackend({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <img
          className="w-full h-48 object-cover"
          src={
            product.images && product.images[0]
              ? product.images[0].url
              : "/placeholder-image.jpg" // Placeholder image
          }
          alt={product.name}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
          <p className="text-gray-900 font-bold mt-2">${product.price}</p>
          <p className="text-gray-600 mt-1">Stock: {product.stock}</p>
          <p className="text-gray-600 mt-1">Rating: {product.rating}</p>
          <p className="text-gray-600 mt-1">Sell Count: {product.sellCount}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCardForBackend;
