import React from "react";

function EditorsPick() {
  return (
    <div className="pt-32 px-10  sm:px-40">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#252B42] text-2xl">EDITOR'S PICK</h1>
        <p className="text-[#737373] text-sm pt-5 pb-3">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col  md:flex-row sm:flex-row sm:h-[500px] sm:items-center sm:space-x-4">
        <div className="relative w-full sm:w-[510px] h-[500px] overflow-hidden mb-4 sm:mb-0">
          <img
            src="src/assets/editors1.png"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base">
            MEN
          </button>
        </div>
        <div className="relative w-full sm:w-[260px] h-[500px] overflow-hidden mb-4 sm:mb-0">
          <img
            src="src/assets/editors2.png"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base">
            WOMEN
          </button>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col space-y-4">
          <div className="relative w-full h-[243px] overflow-hidden">
            <img
              src="src/assets/editors3.png"
              className="w-full h-full object-cover object-top"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base">
              ACCESSORIES
            </button>
          </div>
          <div className="relative w-full h-[243px] overflow-hidden">
            <img
              src="src/assets/editors4.png"
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
