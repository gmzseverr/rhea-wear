import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Subscribe() {
  return (
    <div className="py-10  flex flex-col gap-24 sm:pt-20 items-center justify-center   ">
      <section className="flex p-24 flex-col  items-center gap-5">
        <FontAwesomeIcon
          icon={faCreditCard}
          className="bg-red-600 text-white p-7 rounded-full text-4xl"
        />
        <h1 className="text-5xl text-[#252B42] text-center font-bold">
          Designing Better Experience
        </h1>
        <p className="text-sm font-semibold text-center text-gray-400">
          Problems trying to resolve the conflict between the two
          <br className="sm:hidden" /> major realms of Classical physics:{" "}
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Your Email"
            className="bg-[#E6E6E6] w-96 sm:w-60 rounded-l-md py-3.5 px-3"
          />
          <button className="bg-[#23A6F0] py-3.5 rounded-r-md px-3 text-white font-bold">
            Subscribe
          </button>
        </div>
        <p className="text-sm font-semibold text-center text-gray-400">
          Problems trying to resolve the conflict between the two
          <br className="sm:hidden" /> major realms of Classical physics:{" "}
        </p>
      </section>
      <section className="relative sm:object-fill sm:h-screen">
        <img
          src="public/assets/stats.jpeg"
          alt=""
          className="object-cover sm:object-fit sm:h-[798px] h-full"
        />
        <div className="absolute inset-0 flex items-center sm:flex-col  justify-between sm:gap-4  gap-16 text-center  sm:h-[798px] p-5 bg-gradient-to-r from-black/75 to-transparent">
          <div className="flex sm:w-full flex-col  items-start text-start sm:p-14 pl-28 pr-24 text-pretty">
            <h1 className="text-white font-semibold py-4 sm:text-pretty  text-3xl">
              Subscribe For Latest Newsletter
            </h1>
            <p className="text-xs  text-white pb-5 pt-2">
              Problems trying to resolve the conflict between the two
              <br className="sm:hidden" /> major realms of Classical physics:
            </p>
            <button className="bg-[#23A6F0]  hover:bg-[#23A6F0]/75 sm:text-xs text-md rounded-xl px-4 py-3 text-white font-semibold">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
          <div className="sm:gap-x-5 grid grid-flow-col sm:grid-rows-2 grid-rows-3 gap-y-16 gap-x-48 sm:px-10 sm:py-4 pr-28">
            <div className="flex flex-col items-start text-white w-36 sm:w-28 text-start">
              <h2 className="font-extrabold text-3xl">1M+</h2>
              <p className="text-pretty text-sm font-semibold">
                Things on a very small that you have any direct
              </p>
            </div>{" "}
            <div className="flex flex-col items-start text-white w-36 sm:w-28 text-start">
              <h2 className="font-extrabold text-3xl">%98</h2>
              <p className="text-pretty text-sm font-semibold">
                Things on a very small that you have any direct
              </p>
            </div>{" "}
            <div className="flex flex-col items-start text-white w-36 sm:w-28 text-start">
              <h2 className="font-extrabold text-3xl">1M+</h2>
              <p className="text-pretty text-sm font-semibold">
                Things on a very small that you have any direct
              </p>
            </div>{" "}
            <div className="flex flex-col items-start text-white w-36 sm:w-28 text-start">
              <h2 className="font-extrabold text-3xl">4.5</h2>
              <p className="text-pretty text-sm font-semibold">
                Things on a very small that you have any direct
              </p>
            </div>{" "}
            <div className="flex flex-col items-start text-white w-36 sm:w-28 text-start">
              <h2 className="font-extrabold text-3xl">3500</h2>
              <p className="text-pretty text-sm font-semibold">
                Things on a very small that you have any direct
              </p>
            </div>
            <div className="flex flex-col items-start text-white w-36 sm:w-28 text-start">
              <h2 className="font-extrabold text-3xl">1M+</h2>
              <p className="text-pretty text-sm font-semibold">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex p-24 flex-col  items-center gap-5">
        <h1 className="text-5xl text-[#252B42] text-center font-bold">
          Designing Better Experience
        </h1>
        <p className="text-sm font-semibold text-center text-gray-400">
          Problems trying to resolve the conflict between the two
          <br className="sm:hidden" /> major realms of Classical physics:{" "}
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Your Email"
            className="bg-[#E6E6E6] w-96 sm:w-60 rounded-l-md py-3.5 px-3"
          />
          <button className="bg-[#23A6F0] py-3.5 rounded-r-md px-3 text-white font-bold">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
