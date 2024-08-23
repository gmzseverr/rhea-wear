import React from "react";

import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="flex justify-center">
      <section className="w-[239px] h-[615px] flex flex-col items-center">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="h-[427px] object-cover"
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
            {product.category}
          </p>
          <div className="flex flex-row font-bold text-base">
            <p className="pr-2 text-[#BDBDBD]">{product.price}</p>
            <p className="text-[#23856D]">{product.discountedPrice}</p>
          </div>
          {/* <div className="flex pt-2">
            {product.colors.map((color, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faCircle}
                className="pr-1"
                style={{ color }}
              />
            ))}
            </div>*/}
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
