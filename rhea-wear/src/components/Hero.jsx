import React from "react";

function Hero() {
  return (
    <div className="pt-10">
      <div className="flex  items-center justify-between object-contain ">
        <div className=" overflow-hidden object-left   ">
          <img
            src="public/assets/hero-2.png"
            alt=""
            className="object-cover  h-full pl-20 sm:pl-0  "
          />
        </div>

        <section className="text-center z-10 mt-6 sm:absolute sm:inset-x-0 sm:mx-auto sm:w-1/2 sm:text-left">
          <h4 className="text-[#23A6F0] font-bold">SUMMER 2024</h4>
          <h1 className="text-[#252B42] sm:text-3xl text-6xl tracking-widest font-bold">
            Multicoloured <br /> Tie-dye Sweater
          </h1>
          <p className="text-[#737373] smpy-2 py-5">
            We know large objects will act.
          </p>
          <button className="border border-[#23A6F0] bg-white text-[#23A6F0] px-4 py-2 hover:bg-[#23A6F0] hover:text-white transition duration-300 ease-in-out">
            SHOP NOW
          </button>
        </section>
        <div className=" pl-0 overflow-hidden">
          <img
            src="public/assets/hero-1.png"
            alt=""
            className="object-cover w-full h-full  "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
