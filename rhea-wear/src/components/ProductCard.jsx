import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Card } from "react-bootstrap";

function ProductCard() {
  return (
    <div>
      <Card className="w-[239px] h-[615px]  ">
        <img src="src/assets/hero-2.png" className="h-[427px] object-cover" />
        <div className="flex flex-col items-center py-5">
          <h4 className="text-base text-[#252B42] font-bold">Graphic Design</h4>
          <p className="py-2 text-[#737373] font-bold text-sm">
            English Department
          </p>
          <div className="flex flex-row font-bold text-base">
            <p className="pr-2 text-[#BDBDBD] ">$16.48</p>
            <p className="text-[#23856D]">$6.48</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#23A6F0]" />
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#23856D]" />
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#E77C40]" />
            <FontAwesomeIcon icon={faCircle} className="pr-1 text-[#252B42]" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
