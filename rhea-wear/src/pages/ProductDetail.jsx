import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="pt-32 sm:px-10 px-40">
      <div className="flex flex-row gap-8 justify-around sm:grid sm:grid-cols-1">
        {/* Sol tar foto galeri/slider eklenecek */}
        <div className="flex">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* info */}
        <div className="">
          <div>
            <h2 className="py-2 text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-500 py-2">{product.reviews}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">{product.price}</h2>
            <p className="text-[#23A6F0] font-semibold text-sm">
              {product.availabity}
            </p>
          </div>
          <p className="text-gray-700 pt-2 pb-5">{product.description}</p>
          <p className="border-t-2 pb-2 text-gray-300"> </p>
          <div className="flex py-2">
            {product.colors.map((color, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faCircle}
                size="2xl"
                className="pr-1"
                style={{ color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
