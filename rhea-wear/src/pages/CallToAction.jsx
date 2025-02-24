import {
  faApple,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="py-10  flex flex-col  sm:pt-20 items-center justify-center   ">
      <section className="flex p-24 flex-col items-center gap-5">
        <FontAwesomeIcon
          icon={faCreditCard}
          className="bg-red-600 text-white p-7 rounded-full text-4xl"
        />
        <h1 className="text-5xl text-[#252B42] font-bold">
          Designing Better Experience
        </h1>
        <div className="flex gap-5">
          <button className="bg-[#23A6F0] hover:bg-[#23A6F0]/75 text-sm rounded-lg py-2 px-3 text-white font-semibold">
            Try Now
          </button>
          <button className=" border-[#23A6F0] hover:bg-[#23A6F0]/10 border-1 text-sm rounded-lg py-2 px-3 text-[#23A6F0] font-semibold">
            Learn More
          </button>
        </div>
        <p className="text-sm font-semibold text-center text-gray-400">
          Problems trying to resolve the conflict between the two
          <br className="sm:hidden" /> major realms of Classical physics:{" "}
        </p>
      </section>
      <section className="flex p-24  flex-col  bg-[#252B42] sm:w-full w-full items-center gap-5">
        <h1 className="text-5xl text-white font-bold">
          Designing Better Experience
        </h1>
        <p className="text-sm font-semibold text-center text-white">
          Problems trying to resolve the conflict between the two
          <br className="sm:hidden" /> major realms of Classical physics:{" "}
        </p>

        <button className="bg-[#23A6F0] sm:text-xs hover:bg-[#23A6F0]/75 text-md rounded-xl px-4 py-3 text-white font-semibold">
          <Link to="/subscribe">ADD YOUR CALL TO ACTION</Link>
        </button>
        <p className="text-sm font-semibold text-center text-white">
          {" "}
          Designing Better Experience
        </p>
      </section>
      <section className="flex p-24 flex-col items-center gap-5">
        <FontAwesomeIcon
          icon={faCreditCard}
          className="bg-red-600 text-white p-7 rounded-full text-4xl"
        />
        <h1 className="text-5xl text-center text-[#252B42] font-bold">
          Designing Better Experience
        </h1>
        <button className="bg-[#23A6F0] sm:text-xs hover:bg-[#23A6F0]/75 text-md rounded-xl px-4 py-3 text-white font-semibold">
          <Link to="/subscribe">ADD YOUR CALL TO ACTION</Link>
        </button>
        <div className="flex gap-3 text-3xl cursor-pointer  ">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#23A6F0] hover:text-4xl"
          />
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-[#395185] hover:text-4xl"
          />
          <FontAwesomeIcon icon={faInstagram} className="hover:text-4xl" />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[#0A66C2] hover:text-4xl"
          />
        </div>
      </section>
      <section className="flex p-24 flex-col items-center gap-4">
        <h1 className="text-5xl w-4/6 sm:w-full text-center text-[#252B42] font-bold">
          Problems trying to resolve the conflict between
        </h1>
        <p className="text-sm font-semibold text-center text-gray-400">
          Problems trying to resolve the conflict between the two
          <br className="sm:hidden" /> major realms of Classical physics:{" "}
        </p>
        <button className="bg-[#23A6F0] hover:bg-[#23A6F0]/75 sm:text-xs text-md rounded-xl px-4 py-3 text-white font-semibold">
          <Link to="/subscribe">ADD YOUR CALL TO ACTION</Link>
        </button>
        <img src="/assets/action.png" alt="" />
      </section>
      <section className="flex p-24 flex-col items-center gap-4">
        <h3 className="text-md text-center text-[#23A6F0] font-bold">
          Designing Better Experience
        </h3>
        <h1 className="text-5xl w-4/6 sm:w-full text-center text-[#252B42] font-bold">
          Problems trying to resolve the conflict between
        </h1>
        <p className="text-sm font-semibold text-center text-gray-400">
          Problems trying to resolve the conflict between the two
          <br className="sm:hidden" /> major realms of Classical physics:{" "}
        </p>
        <div className="flex sm:flex-col gap-5">
          <button className="text-[#252B42] border-1 border-gray-400  text-md rounded-xl px-4 py-3  font-semibold">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faApple} className="text-5xl " />
              <p className="text-sm text-[#252B42] text-start">
                Download on
                <br /> App Store
              </p>
            </div>
          </button>
          <button className="bg-[#252B42] text-white   text-md rounded-xl px-4 py-3  font-semibold">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faGooglePlay} className="text-4xl " />
              <p className="text-sm  text-start">
                Download on
                <br /> Google Play
              </p>
            </div>
          </button>
        </div>
      </section>
      <section className="relative sm:object-contain sm:h-screen sm:w-screen">
        <img
          src="public/assets/action.jpeg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute  inset-0 flex flex-col items-center  justify-center text-center p-5 bg-black/50">
          <div className="border-2  border-white sm:p-14 p-24">
            <h1 className="text-white font-semibold py-4 sm:text-pretty sm:text-3xl text-4xl">
              -50 PROMOTION HOT SUMMER
            </h1>
            <p className="text-xs  text-white pb-5 pt-2">
              Problems trying to resolve the conflict between the two
              <br className="sm:hidden" /> major realms of Classical physics:
            </p>
            <button className="bg-[#23A6F0]  hover:bg-[#23A6F0]/75 sm:text-xs text-md rounded-xl px-4 py-3 text-white font-semibold">
              <Link to="/subscribe">ADD YOUR CALL TO ACTION</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="relative sm:object-contain sm:h-screen sm:w-screen">
        <img
          src="public/assets/action.jpeg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute  inset-0 flex flex-col items-center  justify-center text-center p-5 bg-black/50">
          <div className="border-2  bg-white sm:p-14 p-24">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="bg-red-600 text-white p-7 rounded-full text-4xl"
            />
            <h1 className=" font-semibold py-4 sm:text-pretty sm:text-3xl text-4xl">
              -15 BONUS
            </h1>
            <p className="text-xs  pb-5 pt-2">
              Problems trying to resolve the conflict between the two
            </p>
            <button className="bg-[#23A6F0]  hover:bg-[#23A6F0]/75 sm:text-xs text-md rounded-xl px-4 py-3 text-white font-semibold">
              <Link to="/subscribe">ADD YOUR CALL TO ACTION</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="relative sm:object-contain sm:h-screen sm:w-screen">
        <img
          src="public/assets/action2.jpeg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute  inset-0 flex flex-col items-center gap-5 justify-center text-center p-5">
          <h3 className="text-md text-center text-[#23A6F0] font-bold">
            Designing Better Experience
          </h3>
          <h1 className="text-5xl w-4/6 sm:w-full text-center text-[#252B42] font-bold">
            Problems trying to resolve the conflict between
          </h1>
          <p className="text-sm font-semibold text-center text-gray-400">
            Problems trying to resolve the conflict between the two
            <br className="sm:hidden" /> major realms of Classical physics:{" "}
          </p>
          <p className="text-green-700 text-lg font-bold">$16.48</p>
          <button className="bg-[#23A6F0]  hover:bg-[#23A6F0]/75 sm:text-xs text-md rounded-xl px-4 py-3 text-white font-semibold">
            <Link to="/subscribe">ADD YOUR CALL TO ACTION</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default CallToAction;
