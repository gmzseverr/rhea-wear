import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

const packets = [
  {
    title: "FREE",
    desc: "Basic plan with limited features",
    price: "0",
    features: {
      "Unlimited product updates": false,
      "Unlimited processing": false,
      "1GB Cloud Storage": true,
      "Email and Community Support": true,
    },
  },
  {
    title: "PRO",
    desc: "Advanced plan with more features",
    price: "19.99",
    features: {
      "Unlimited product updates": true,
      "Unlimited processing": true,
      "1GB Cloud Storage": false,
      "Email and Community Support": true,
    },
  },
  {
    title: "PREMIUM",
    desc: "Full-featured plan for businesses",
    price: "49.99",
    features: {
      "Unlimited product updates": true,
      "Unlimited processing": true,
      "1GB Cloud Storage": true,
      "Email and Community Support": true,
    },
  },
];

function PricingCardSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="flex-col bg-zinc-50 pb-28 flex items-center gap-4">
      {" "}
      <section className="flex items-center gap-4 py-5">
        <p className="text-xs font-bold text-[#252b42]">Monthly</p>
        <button
          onClick={() => setIsMonthly(!isMonthly)}
          className="focus:outline-none"
        >
          <FontAwesomeIcon
            icon={isMonthly ? faToggleOn : faToggleOff}
            className="text-2xl text-[#23A6F0]"
          />
        </button>
        <p className="text-xs font-bold text-[#252b42]">Yearly</p>
        <p className="bg-[#B2E3FF] rounded-2xl text-xs py-1 px-2 font-semibold text-[#23A6F0]">
          Save 25%
        </p>
      </section>
      <section className="flex items-center sm:flex-col sm:gap-3 gap-1 justify-between ">
        {packets.map((packet, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-80  p-5  border-1 border-[#23A6F0]  rounded-lg items-center flex flex-col gap-2 cursor-pointer transition 
            ${
              selectedIndex === index
                ? "bg-[#252b42] text-white h-[600px]"
                : "bg-white text-[#252b42] h-[550px]"
            }`}
          >
            <h2
              className={`text-xl font-bold text-center ]      ${
                selectedIndex === index ? " text-white" : "bg-white text-black"
              }`}
            >
              {packet.title}
            </h2>
            <p className="text-gray-500 font-semibold text-sm text-center">
              {packet.desc}
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl flex items-start text-[#23A6F0] font-bold text-center my-3">
                {packet.price}
              </p>
              <div className="text-[#23A6F0] font-semibold">
                <p className="">$</p>
                <p className="text-xs">Per Month</p>
              </div>
            </div>
            <ul className="text-sm space-y-2">
              {Object.entries(packet.features).map(([feature, isEnabled]) => (
                <li
                  key={feature}
                  className={`flex text-[#252b42] font-semibold tesxt-sm items-center gap-2 ${
                    selectedIndex === index ? " text-white" : " text-[#252b42]"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="2x"
                    className={isEnabled ? "text-green-500" : "text-gray-400"}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-5 w-full text-sm py-3 rounded-lg font-semibold transition
              ${
                selectedIndex === index
                  ? "bg-[#23A6F0] text-white hover:bg-gray-200"
                  : "bg-[#252b42] text-white hover:bg-[#23A6F0]"
              }`}
            >
              Try For Free
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PricingCardSection;
