import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsForBackend = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API'dan tüm ürünleri çek
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800 my-4">
        All Products
      </h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  className="w-full h-48 object-cover"
                  src={
                    product.images && product.images[0]
                      ? product.images[0].url
                      : "/placeholder-image.jpg" // Yer tutucu resim
                  }
                  alt={product.name}
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm">
                    {product.description}
                  </p>
                  <p className="text-gray-900 font-bold mt-2">
                    ${product.price}
                  </p>
                  <p className="text-gray-600 mt-1">Stock: {product.stock}</p>
                  <p className="text-gray-600 mt-1">Rating: {product.rating}</p>
                  <p className="text-gray-600 mt-1">
                    Sell Count: {product.sellCount}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsForBackend;
