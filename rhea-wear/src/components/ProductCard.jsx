import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function ProductCard() {
  const product = {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    discountedPrice: "$11.90",
    image: "src/assets/hero-2.png",
    category: "Clothes",
    description: "This is a great product for any occasion.",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  };
  return (
    <div className="flex  justify-center">
      <section className="w-[239px] h-[615px] flex flex-col items-center  ">
        <img src={product.image} className="h-[427px] object-cover" />
        <div className="flex flex-col items-center py-5">
          <h4 className="text-base text-[#252B42] font-bold">{product.name}</h4>
          <p className="py-2 text-[#737373] font-bold text-sm">
            {product.category}
          </p>
          <div className="flex flex-row font-bold text-base">
            <p className="pr-2 text-[#BDBDBD] ">{product.price}</p>
            <p className="text-[#23856D]">{product.discountedPrice}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#23A6F0]" />
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#23856D]" />
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#E77C40]" />
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#252B42]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
