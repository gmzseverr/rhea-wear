import React from "react";

function RowComponent() {
  return (
    <div className="pt-32 sm:px-10 px-40">
      <div className="flex sm:grid sm:grid-cols-1 flex-row-reverse sm:justify-items-center items-center">
        <div className="sm:w-1/2 text-center flex flex-col items-center pb-4">
          <h5 className="text-[#BDBDBD] font-bold">SUMMER 2020</h5>
          <h2 className="text-black text-wrap font-bold text-4xl pt-7">
            Part of the Neural Universe
          </h2>
          <p className="text-[#737373] text-xl py-7">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="gap-4  flex items-center sm:grid-cols-1 sm:grid flex-row">
            <button className=" border bg-[#23A6F0] sm:bg-[#2DC071] text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-100  transition duration-300 ease-in-out">
              BUY NOW
            </button>
            <button className=" border bg-[#23A6F0] sm:bg-[#2DC071] text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-100  transition duration-300 ease-in-out">
              READ MORE
            </button>
          </div>
        </div>
        <img src="/assets/none.png" className="sm:w-full sm:mb-5" />
      </div>
    </div>
  );
}

export default RowComponent;
