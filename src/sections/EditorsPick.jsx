import React from "react";

function EditorsPick() {
  return (
    <div className="pt-32 sm:px-10  px-40">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#252B42] text-2xl">EDITOR'S PICK</h1>
        <p className="text-[#737373] text-sm pt-3 pb-5">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex  sm:flex-col justify-center h-auto sm:items-center space-x-4">
        <div className="relative w-full sm:bottom-3 sm:pl-2 sm:w-96 sm:h-80 h-[500px] overflow-hidden mb-0">
          <img
            src="/assets/editors1.png"
            className="w-full h-full sm:w-96 sm:h-80 h object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base">
            MEN
          </button>
        </div>
        <div className="relative w-full sm:mb-3 sm:w-96 sm:h-80 h  h-[500px] left-0  overflow-hidden ">
          <img
            src="/assets/editors2.png"
            className="w-full h-full sm:w-96 sm:h-80  object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base">
            WOMEN
          </button>
        </div>
        <div className="w-full sm:items-center flex flex-col space-y-4">
          <div className="relative w-full h-[243px] sm:w-96 sm:h-80  overflow-hidden">
            <img
              src="/assets/editors3.png"
              className="w-full h-full object-cover object-top"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base">
              ACCESSORIES
            </button>
          </div>
          <div className="relative w-full h-[243px] sm:w-96 sm:h-80  overflow-hidden">
            <img
              src="/assets/editors4.png"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;
