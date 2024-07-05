import React from "react";
import ProductCard from "../components/ProductCard";
import ShopImageSection from "../components/ShopImageSection";

import DropDownSort from "../components/DropDownSort";
import { faGrip, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationShop from "../components/PaginationShop";
import Clients from "../components/Clients";

function ShopPage() {
  return (
    <div className="pt-32 px-10 sm:px-40 ">
      <div className="">
        <div className="py-3 flex lg:justify-between  ">
          <h2 className="text-[#252B42] font-bold text-2xl">Shop</h2>
          <div className="text-sm font-semibold flex items-center mt-2 sm:mt-0 sm:ml-4">
            <a href="#" className="text-gray-400 hover:text-[#252B42]">
              Home
            </a>
            <span className="text-gray-400 mx-1">{">"}</span>
            <a href="#" className="text-gray-400 hover:text-[#252B42]">
              Shop
            </a>
          </div>
        </div>

        <ShopImageSection />

        <section className="flex justify-between items-center py-5">
          <div>
            <p className="text-sm text-gray-500 font-bold">
              Showing all 12 results
            </p>
          </div>
          <div className="flex items-center space-x-4 ">
            <h4 className="mr-1 text-sm text-gray-500 font-bold">Views:</h4>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faGrip}
                size="xl"
                className="border border-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-200 text-[#252B42]"
              />
              <FontAwesomeIcon
                icon={faListUl}
                size="xl"
                className="border border-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-200 text-gray-500"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 ">
            <DropDownSort />
            <button className="inline-flex justify-center gap-x-1.5  rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300">
              Filter
            </button>
          </div>
        </section>
      </div>

      <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-col">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> <ProductCard />
        <ProductCard />
      </div>
      <section className="flex items-center justify-center">
        <PaginationShop />
      </section>
      <Clients />
    </div>
  );
}

export default ShopPage;
