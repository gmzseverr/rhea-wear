import React from "react";
import PricingCardSection from "../sections/PricingCardSection";
import Clients from "../components/Clients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Pricing() {
  return (
    <div>
      <section className="pt-32 sm:px-10 px-40">
        <div className="py-3 flex justify-between gap-3  items-center flex-col ">
          <h1 className="text-gray-400 font-bold text-sm">PRICING</h1>
          <h2 className="text-[#252B42] font-bold text-3xl">Simple Pricing</h2>
          <div className="text-sm font-semibold flex items-center mt-2">
            <a href="/" className="text-gray-400 hover:text-[#252B42]">
              Home
            </a>
            <span className="text-gray-400 mx-1">{">"}</span>
            <a href="/pricing" className="text-gray-400 hover:text-[#252B42]">
              Pricing
            </a>
          </div>
        </div>
      </section>
      <div className=" flex flex-col items-center text-sm text-gray-500 gap-2 bg-zinc-50">
        <PricingCardSection />
        <p className="">Trusted By Over 4000 Big Companies</p>
        <Clients />
      </div>
      <section className="flex flex-col pt-28  items-center sm:px-10 px-40">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[#252B42] font-bold text-2xl">Pricing FAQs</h1>
          <p className="text-gray-400 font-semibold text-center text-sm">
            Problems trying to resolve the conflict between
            <br className="sm:hidden" /> the two major realms of Classical
            physics
          </p>
        </div>
        <div className="flex pt-14 flex-col-2 sm:flex-col gap-12">
          <section className="flex flex-col gap-4">
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#23A6F0]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm">Lorem ipsum dolor sit</h3>
                <p className="font-semibold text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, aperiam? Expedita provident, magnam a dolorum
                  laudantium, numquam doloremque, distinctio sint laborum atque
                  vitae maiores libero eius modi sunt iste. Qui.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#23A6F0]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm">Lorem ipsum dolor sit</h3>
                <p className="font-semibold text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, aperiam? Expedita provident, magnam a dolorum
                  laudantium, numquam doloremque, distinctio sint laborum atque
                  vitae maiores libero eius modi sunt iste. Qui.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#23A6F0]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm">Lorem ipsum dolor sit</h3>
                <p className="font-semibold text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, aperiam? Expedita provident, magnam a dolorum
                  laudantium, numquam doloremque, distinctio sint laborum atque
                  vitae maiores libero eius modi sunt iste. Qui.
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#23A6F0]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm">Lorem ipsum dolor sit</h3>
                <p className="font-semibold text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, aperiam? Expedita provident, magnam a dolorum
                  laudantium, numquam doloremque, distinctio sint laborum atque
                  vitae maiores libero eius modi sunt iste. Qui.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#23A6F0]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm">Lorem ipsum dolor sit</h3>
                <p className="font-semibold text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, aperiam? Expedita provident, magnam a dolorum
                  laudantium, numquam doloremque, distinctio sint laborum atque
                  vitae maiores libero eius modi sunt iste. Qui.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#23A6F0]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm">Lorem ipsum dolor sit</h3>
                <p className="font-semibold text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, aperiam? Expedita provident, magnam a dolorum
                  laudantium, numquam doloremque, distinctio sint laborum atque
                  vitae maiores libero eius modi sunt iste. Qui.
                </p>
              </div>
            </div>
          </section>
        </div>
        <p className="pt-28 font-semibold text-md  text-center sm:px-28 text-gray-500 ">
          Haven’t got your answer? Contact our support
        </p>
      </section>
      <section className=" flex flex-col items-center pt-24 sm:px-24 px-40">
        <h2 className="text-4xl font-bold py-4 text-center ">
          Start your 14 days free trial
        </h2>
        <p className="text-sm text-[#737373] pb-4 text-center ">
          Met minim Mollie non desert Alamo est sit cliquey dolor
          <br className="sm:hidden" /> do met sent. RELIT official consequent.
        </p>
        <button className="inline-flex justify-center gap-x-1.5 rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300">
          Try it free now
        </button>
        <div className="flex gap-3 text-2xl cursor-pointer py-8 ">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#23A6F0] hover:text-3xl"
          />
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-[#395185] hover:text-3xl"
          />
          <FontAwesomeIcon icon={faInstagram} className="hover:text-3xl" />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[#0A66C2] hover:text-3xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Pricing;
