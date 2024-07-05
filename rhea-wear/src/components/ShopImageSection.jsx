import React from "react";

function ShopImageSection() {
  return (
    <section className="lg:grid lg:grid-cols-5 lg:gap-2   ">
      <div className="relative">
        <img
          src="src/assets/shopcard1.jpeg"
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
          src="src/assets/shopcard2.jpeg"
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
          src="src/assets/shopcard3.jpeg"
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
          src="src/assets/shopcard4.jpeg"
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
          src="src/assets/shopcard5.jpeg"
          alt="Image 5"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 hover:opacity-30">
          <h4> CLOTHS</h4>
          <p className="text-sm">5 items</p>
        </div>
      </div>
    </section>
  );
}

export default ShopImageSection;
