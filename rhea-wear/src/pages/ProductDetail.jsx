import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/actions/productActions"; // Ensure you have this action
import { Spinner } from "react-bootstrap";

function ProductDetail() {
  const { productId, gender, categoryName, categoryId, productNameSlug } =
    useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.currentProduct);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (fetchState === "ERROR" || !product) {
    return (
      <div className="text-center text-red-500">
        Error loading product details. Please try again later.
      </div>
    );
  }

  const imageUrl =
    product.images && product.images[0] ? product.images[0].url : "";

  return (
    <div className="container mx-auto p-4">
      <Link
        to={`/shop/${gender}/${categoryName}/${categoryId}`}
        className="text-blue-500 hover:underline"
      >
        Back to Category
      </Link>
      <div className="flex flex-col md:flex-row mt-4">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-xl font-bold mt-4">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
          <p className="text-sm text-gray-500 mt-2">Rating: {product.rating}</p>
          <p className="text-sm text-gray-500 mt-2">
            Sold: {product.sell_count}
          </p>
          <div className="flex flex-col mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add to Cart
            </button>
            {/* Add other actions like "Add to Wishlist" or "Buy Now" */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
