import { CircleStackIcon } from "@heroicons/react/20/solid";
import React from "react";

function AboutUsImage() {
  return (
    <div className="py-10 px-20 flex sm:px-10 sm:pt-48 items-center    ">
      <div className=" flex justify-end items-end px-24">
        <div className="flex justify-end gap-3 ">
          <div className="flex ">
            <div className="absolute w-20 h-20 sm:w-12 sm:h-12  bg-rose-100 rounded-full "></div>
            <div className="absolute w-3.5 h-3.5 sm:w-2 sm:h-2 mt-80  bg-violet-400 rounded-full self-center"></div>
          </div>

          <div className="relative">
            <div className="relative w-[485px] h-[485px] sm:w-[295px] sm:h-[295px] bg-rose-100 rounded-full"></div>
          </div>
          <div className="flex flex-col pt-10 content-between ">
            <div className="absolute w-7 h-7  mt-48 ml-16 sm:w-5 sm:h-5 bg-rose-100 rounded-full self-center"></div>
            <div className="absolute w-3.5 h-3.5 sm:w-2 sm:h-2 mt-16  bg-violet-400 rounded-full self-end"></div>
          </div>
        </div>
      </div>
      <div className=" flex absolute z-10">
        <img
          src="public/assets/about.png"
          alt="About Us"
          className="object-contain "
        />
      </div>
    </div>
  );
}

export default AboutUsImage;
