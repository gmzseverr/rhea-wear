import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import { API } from "../api/api";

function Bestsellers() {
  const [bestsellers, setBestsellers] = useState([]);
  const [fetchState, setFetchState] = useState("NOT_FETCHED"); // "FETCHING", "FETCHED", "ERROR"

  useEffect(() => {
    const fetchBestsellers = async () => {
      setFetchState("FETCHING");

      try {
        const response = await API.get("/products");

        const sortedProducts = response.data.products.sort(
          (a, b) => b.sell_count - a.sell_count
        );

        setBestsellers(sortedProducts.slice(0, 8));
        setFetchState("FETCHED");
      } catch (error) {
        console.error("Failed to fetch bestsellers:", error);
        setFetchState("ERROR");
      }
    };

    fetchBestsellers();
  }, []);

  if (fetchState === "FETCHING") {
    return <div>Loading...</div>;
  }

  if (fetchState === "ERROR") {
    return <div>Error loading bestsellers.</div>;
  }

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
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
