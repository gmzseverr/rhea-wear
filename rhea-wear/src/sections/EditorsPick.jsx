import React from "react";
import { useNavigate } from "react-router-dom";

function EditorsPick() {
  const navigate = useNavigate();

  const handleCategoryClick = (gender) => {
    if (gender === "k") {
      navigate("/shop/kadin/k/1");
    } else if (gender === "e") {
      navigate("/shop/erkek/e/13");
    } else if (gender === "a") {
      navigate("/shop/kadin/k/2");
    } else if (gender === "c") {
      navigate("/shop/erkek/e/14");
    }
  };

  return (
    <div className="pt-32 sm:px-10 px-40">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#252B42] text-2xl">EDITOR'S PICK</h1>
        <p className="text-[#737373] text-sm pt-3 pb-5">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-row sm:flex-col h-[500px] sm:items-center space-x-4">
        <div className="relative w-full sm:w-[510px] h-[500px] overflow-hidden sm:mb-4">
          <img
            src="/assets/editors1.png"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => handleCategoryClick("e")}
            className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base"
          >
            MEN
          </button>
        </div>
        <div className="relative w-full sm:w-[260px] h-[500px] overflow-hidden sm:mb-4">
          <img
            src="/assets/editors2.png"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => handleCategoryClick("k")}
            className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base"
          >
            WOMEN
          </button>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col space-y-4">
          <div className="relative w-full h-[243px] overflow-hidden">
            <img
              src="/assets/editors3.png"
              className="w-full h-full object-cover object-top"
            />
            <button
              onClick={() => handleCategoryClick("a")}
              className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base"
            >
              ACCESSORIES
            </button>
          </div>
          <div className="relative w-full h-[243px] sm:mb-4 overflow-hidden">
            <img
              src="/assets/editors4.png"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => handleCategoryClick("c")}
              className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold text-base"
            >
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;
