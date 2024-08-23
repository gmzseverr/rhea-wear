import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetailBackend = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching product details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4">
      {product && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            className="w-full h-64 object-cover rounded"
            src={
              product.images && product.images.length > 0
                ? product.images[0].url
                : "/placeholder-image.jpg"
            }
            alt={product.name}
          />
          <h1 className="text-3xl font-semibold text-gray-800 mt-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-gray-900 font-bold mt-2">${product.price}</p>
          <p className="text-gray-600 mt-1">Stock: {product.stock}</p>
          <p className="text-gray-600 mt-1">Rating: {product.rating}</p>
          <p className="text-gray-600 mt-1">Sell Count: {product.sellCount}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailBackend;
