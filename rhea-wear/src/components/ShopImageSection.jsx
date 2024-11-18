import React from "react";

function ShopImageSection() {
  return (
    <div className="">
      <section className="grid grid-cols-5 gap-2   sm:flex sm:flex-col ">
        <div className="relative">
          <img
            src="/assets/shopcard1.jpeg"
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 hover:opacity-30">
            <h4> CLOTHS</h4>
            <p className="text-sm">5 items</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/shopcard2.jpeg"
            alt="Image 2"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 hover:opacity-30">
            <h4> CLOTHS</h4>
            <p className="text-sm">12 items</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/shopcard3.jpeg"
            alt="Image 3"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 hover:opacity-30">
            <h4> CLOTHS</h4>
            <p className="text-sm">5 items</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/shopcard4.jpeg"
            alt="Image 4"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 hover:opacity-30">
            <h4> CLOTHS</h4>
            <p className="text-sm">5 items</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/shopcard5.jpeg"
            alt="Image 5"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 hover:opacity-30">
            <h4> CLOTHS</h4>
            <p className="text-sm">5 items</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopImageSection;
