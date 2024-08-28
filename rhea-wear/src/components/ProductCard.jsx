import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, category }) {
  const imageUrl =
    product.images && product.images[0] ? product.images[0].url : "";

  return (
    <div className="flex justify-center">
      <section className="w-[239px] h-[615px] flex flex-col items-center">
        <Link to={`/product/${product.id}`}>
          <img
            src={imageUrl}
            className="h-[427px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
            alt={product.name}
          />
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
