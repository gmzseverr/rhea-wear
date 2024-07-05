import React from "react";
import ProductCard from "../components/ProductCard";
import ShopImageSection from "../components/ShopImageSection";

function ShopPage() {
  return (
    <div className="pt-32 px-10 sm:px-40 ">
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
      <div className="flex justify-end items-center py-5">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <button className="border border-[#23A6F0] font-bold text-white bg-[#23A6F0] px-4 py-2 rounded-md shadow-md hover:bg-[#23A6F0]">
          Filter
        </button>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col">
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
    </div>
  );
}

export default ShopPage;
