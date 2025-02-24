import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  return (
    <div className="py-10 sm:px-24  flex px-52 sm:pt-20 items-center justify-between  ">
      <section className="flex sm:flex-col items-center sm:gap-16 gap-32">
        <div className="flex  flex-col gap-3 w-80 items-start justify-start">
          <div className="w-2/5 mt-7 h-4 bg-red-600"></div>
          <h1 className="text-5xl pt-10 text-[#252B42] font-bold">
            Featured Products
          </h1>
          <p className="text-sm font-semibold text-pretty text-gray-400">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <Link
            to="/about"
            className="text-[#23A6F0] font-semibold text-sm pt-10"
          >
            Learn More{" "}
          </Link>
        </div>

        <div className="grid-cols-2 sm:flex sm:flex-col pt-10 gap-20 grid">
          <div className="flex w-72 items-center  gap-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="bg-red-600 text-white p-7 rounded-full text-2xl"
            />
            <div className="flex flex-col text-left gap-2">
              <h3 className="text-[#252B42] font-bold text-sm">Easy to use</h3>
              <p className="text-sm font-semibold  text-gray-400">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div className="flex w-72 items-center  gap-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="bg-red-600 text-white p-7 rounded-full text-2xl"
            />
            <div className="flex flex-col text-left gap-2">
              <h3 className="text-[#252B42] font-bold text-sm">Easy to use</h3>
              <p className="text-sm font-semibold  text-gray-400">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div className="flex w-72 items-center  gap-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="bg-red-600 text-white p-7 rounded-full text-2xl"
            />
            <div className="flex flex-col text-left gap-2">
              <h3 className="text-[#252B42] font-bold text-sm">Easy to use</h3>
              <p className="text-sm font-semibold  text-gray-400">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div className="flex w-72 items-center  gap-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="bg-red-600 text-white p-7 rounded-full text-2xl"
            />
            <div className="flex flex-col text-left gap-2">
              <h3 className="text-[#252B42] font-bold text-sm">Easy to use</h3>
              <p className="text-sm font-semibold  text-gray-400">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProducts;
