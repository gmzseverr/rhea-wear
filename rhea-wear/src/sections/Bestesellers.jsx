import React from "react";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

function Bestesellers() {
  return (
    <div className="pt-32 mx-20  sm:px-20">
      <div className=" flex flex-col items-center">
        <h2 className="text-[#737373] text-xl font-medium ">
          Featured Products
        </h2>
        <h1 className="text-2xl text-[#252B42] font-bold py-2">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-sm text-[#737373] font-medium ">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <section className=" grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10">
        <div className="w-[239px] h-[615px]  ">
          <img src="src/assets/hero-2.png" className="h-[427px] object-cover" />
          <div className="flex flex-col items-center py-5">
            <h4 className="text-base text-[#252B42] font-bold">
              Graphic Design
            </h4>
            <p className="py-2 text-[#737373] font-bold text-sm">
              English Department
            </p>
            <div className="flex flex-row font-bold text-base">
              <p className="pr-2 text-[#BDBDBD] ">$16.48</p>
              <p className="text-[#23856D]">$6.48</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23A6F0]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23856D]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#E77C40]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#252B42]"
              />
            </div>
          </div>
        </div>
        <div className="w-[239px] h-[615px]  ">
          <img src="src/assets/hero-2.png" className="h-[427px] object-cover" />
          <div className="flex flex-col items-center py-5">
            <h4 className="text-base text-[#252B42] font-bold">
              Graphic Design
            </h4>
            <p className="py-2 text-[#737373] font-bold text-sm">
              English Department
            </p>
            <div className="flex flex-row font-bold text-base">
              <p className="pr-2 text-[#BDBDBD] ">$16.48</p>
              <p className="text-[#23856D]">$6.48</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23A6F0]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23856D]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#E77C40]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#252B42]"
              />
            </div>
          </div>
        </div>
        <div className="w-[239px] h-[615px]  ">
          <img src="src/assets/hero-2.png" className="h-[427px] object-cover" />
          <div className="flex flex-col items-center py-5">
            <h4 className="text-base text-[#252B42] font-bold">
              Graphic Design
            </h4>
            <p className="py-2 text-[#737373] font-bold text-sm">
              English Department
            </p>
            <div className="flex flex-row font-bold text-base">
              <p className="pr-2 text-[#BDBDBD] ">$16.48</p>
              <p className="text-[#23856D]">$6.48</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23A6F0]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23856D]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#E77C40]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#252B42]"
              />
            </div>
          </div>
        </div>

        <div className="w-[239px] h-[615px]  ">
          <img src="src/assets/hero-2.png" className="h-[427px] object-cover" />
          <div className="flex flex-col items-center py-5">
            <h4 className="text-base text-[#252B42] font-bold">
              Graphic Design
            </h4>
            <p className="py-2 text-[#737373] font-bold text-sm">
              English Department
            </p>
            <div className="flex flex-row font-bold text-base">
              <p className="pr-2 text-[#BDBDBD] ">$16.48</p>
              <p className="text-[#23856D]">$6.48</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23A6F0]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#23856D]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#E77C40]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="pr-1 text-[#252B42]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bestesellers;
