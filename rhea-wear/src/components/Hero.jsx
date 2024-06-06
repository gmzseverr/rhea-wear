import React from "react";

function Hero() {
  return (
    <div>
      <section className="flex justify-between  items-center">
        <div className="pl-20 ">
          <img src="src/assets/hero-2.png" className="" alt="" />
        </div>
        <section className="text-center">
          <h4 className="text-[#23A6F0] font-bold ">SUMMER 2024</h4>
          <h1 className="text-[#252B42] text-6xl tracking-widest font-bold ">
            Multicoloured <br /> Tie-dye Sweater
          </h1>
          <p className="text-[#737373] py-5 ">
            We know large objects will act.
          </p>
          <button className="border border-[#23A6F0] bg-white text-[#23A6F0] px-4 py-2 rounded-md shadow-md hover:bg-[#23A6F0] hover:text-white transition duration-300 ease-in-out">
            SHOP NOW
          </button>
        </section>
        <div className="n">
          <img src="src/assets/hero-1.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
