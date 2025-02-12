import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  addToLikedProducts,
  removeFromLikedProducts,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProductCard({ product, category }) {
  const dispatch = useDispatch();

  const likedProducts = useSelector((state) => state.product.likedProducts);

  // Check if the current product is liked
  const isLiked = likedProducts.some(
    (likedProduct) => likedProduct.id === product.id
  );

  const handleLikeToggle = (e) => {
    e.preventDefault(); // Prevent navigating when clicking heart
    if (isLiked) {
      // If already liked, remove from liked products
      dispatch(removeFromLikedProducts(product.id));
      console.log("Product removed from liked.");
      toast.info("Product removed from liked.");
    } else {
      // If not liked, add to liked products
      dispatch(addToLikedProducts(product));
      console.log("Product added to liked.");
      toast.success("Product added to liked.");
    }
  };

  const imageUrl =
    product.images && product.images[0] ? product.images[0].url : "";

  return (
    <div className="flex justify-center hover:opacity-100">
      <section className="w-[239px] h-[615px] flex flex-col items-center">
        <Link
          to={`/product/${product.id}`}
          className="no-underline text-inherit"
        >
          <div className="relative hover:text-red-400">
            {/* Favorite icon */}
            <div
              className={`absolute top-2 right-2 flex justify-center items-center w-8 h-8 rounded-full shadow-sm ${
                isLiked
                  ? "text-red-600 bg-red-200"
                  : "bg-gray-200 hover:bg-gray-300 hover:text-red-500"
              } cursor-pointer z-10 hover:text-red-500`}
              onClick={handleLikeToggle}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <img
              src={imageUrl}
              className="h-96 object-cover cursor-pointer transition-opacity"
              alt={product.name}
            />
          </div>
        </Link>

        <div className="flex flex-col items-center py-5">
          <Link to={`/product/${product.id}`}>
            <h4 className="text-base text-[#252B42] font-bold">
              {product.name}
            </h4>
          </Link>
          <p className="py-2 text-[#737373] font-bold text-sm">
            {category ? category.title : "Category not available"}
          </p>
          <div className="flex flex-row font-bold text-base">
            <p className="pr-2 text-[#BDBDBD]">${product.price}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
