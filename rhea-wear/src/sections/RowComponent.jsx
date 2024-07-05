import React from "react";

function RowComponent() {
  return (
    <div className="pt-32 px-10 sm:px-40">
      <div className="flex flex-col-reverse sm:flex-row items-center">
        <img
          src="src/assets/none.png"
          className="w-full max-w-md mb-5 sm:mr-10 sm:mb-0"
        />
        <div className="sm:w-1/2 text-center flex flex-col items-center pb-4">
          <h5 className="text-[#BDBDBD] font-bold">SUMMER 2020</h5>
          <h2 className="text-black font-bold text-4xl pt-7">
            Part of the Neural <br /> Universe
          </h2>
          <p className="text-[#737373] text-xl py-7">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="gap-4 sm:gap-4 flex items-center flex-col sm:flex-row">
            <button className="border bg-[#23A6F0] text-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-[#23A6F0] transition duration-300 ease-in-out">
              BUY NOW
            </button>
            <button className="border border-[#23A6F0] bg-white text-[#23A6F0] px-4 py-2 rounded-md shadow-md hover:bg-[#23A6F0] hover:text-white transition duration-300 ease-in-out">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowComponent;
