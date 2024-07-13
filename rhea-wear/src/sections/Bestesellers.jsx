import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

function Bestsellers() {
  const displayedProducts = products.slice(0, 8);

  return (
    <div className="pt-32 mx-20 px-20 sm:items-center">
      <div className="flex flex-col text-center">
        <h2 className="text-[#737373] text-xl font-medium">
          Featured Products
        </h2>
        <h1 className="text-2xl text-[#252B42] font-bold py-2">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-sm text-[#737373] font-medium">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid sm:grid-cols-1 grid-cols-4 gap-5 pt-10">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
