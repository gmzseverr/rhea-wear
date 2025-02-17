import React, { useEffect, useState } from "react";

import ShopImageSection from "../components/ShopImageSection";

import Clients from "../components/Clients";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

function ShopPage() {
  const totalProducts = useSelector((state) => state.product.total);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
      <div className="pt-32 sm:px-10 px-40">
        <div>
          <div className="py-3 flex justify-between sm:flex-col">
            <h2 className="text-[#252B42] font-bold text-2xl">Shop</h2>
            <div className="text-sm font-semibold flex items-center mt-2">
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
          <section className="flex justify-between items-center py-5 sm:flex sm:flex-col sm:gap-4">
            <div>
              <p className="text-sm text-gray-500 font-bold">
                Showing all {totalProducts} results
              </p>
            </div>

            <div className="flex justify-end gap-2"></div>
          </section>
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path=":gender/:code/:categoryId" element={<ProductList />} />
        </Routes>
      </div>
      <div></div>
      <div className="w-full bg-zinc-100">
        <Clients />
      </div>
    </div>
  );
}

export default ShopPage;
