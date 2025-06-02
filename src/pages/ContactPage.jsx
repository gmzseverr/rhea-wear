import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="pt-32 sm:px-10 px-40 ">
      <div className="flex sm:flex-col gap-20 sm:gap-0  justify-around items-center">
        <section className="flex flex-col text-[#252B42] gap-5 sm:px-10 sm:items-center  items-stretch ">
          <h3 className="font-bold sm:text-center text-xs">CONTACT US</h3>
          <h1 className="font-bold sm:text-center text-5xl ">
            Get in touch today!
          </h1>
          <p className="text-gray-500 sm:text-center text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className="flex flex-col items-start sm:items-center font-bold text-md text-[#252B42] gap-2 ">
            <p>Phone ; +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
          <div className="flex text-[#252B42] gap-3 ">
            <FontAwesomeIcon size="xl" icon={faTwitter} />
            <FontAwesomeIcon size="xl" icon={faFacebook} />
            <FontAwesomeIcon size="xl" icon={faInstagram} />
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </div>
        </section>
        <ContactSection className="w-1/2 sm:w-full " />
      </div>
      <div className="px-56 py-28 sm:py-20 sm:px-16 flex flex-col items-center ">
        <h2 className="text-5xl font-bold text-center">
          Get answers to all your questions.
        </h2>
        <p className="text-xl py-5 text-center text-[#737373] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <button className=" border bg-[#23A6F0]  text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-100  transition duration-300 ease-in-out">
          <Link to="/subscribe">CONTACT OUR COMPANY</Link>
        </button>
        <div className="flex text-gray-400 pt-10 gap-3 ">
          <FontAwesomeIcon size="lg" icon={faTwitter} />
          <FontAwesomeIcon size="lg" icon={faFacebook} />
          <FontAwesomeIcon size="lg" icon={faInstagram} />
          <FontAwesomeIcon size="lg" icon={faLinkedin} />
        </div>
      </div>
      <section className="sm:p-10 flex flex-col items-center">
        <div className="flex flex-col text-[#252B42] gap-5 sm:px-10 items-center   ">
          <h3 className="font-bold  text-xs">VISIT OUR OFFICE</h3>
          <h1 className="font-bold text-center text-5xl ">
            We help small businesses
            <br className="sm:hidden" /> with big ideas
          </h1>
        </div>
        <section className="flex gap-5 py-28 sm:py-12 sm:flex-col">
          <div className="flex flex-col p-10 items-center gap-2  ">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-5xl text-[#23A6F0] pb-3"
            />
            <p className="text-[#252B42] text-sm font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[#252B42] text-sm font-semibold">
              georgia.young@ple.com
            </p>
            <p className="text-[#252B42] text-sm font-semibold pt-3 pb-1">
              Get Support
            </p>
            <button className="text-xs font-semibold py-2 px-3 border-1 border-[#23A6F0] text-[#23A6F0] rounded-3xl ">
              <Link to="/subscribe">Submit Request</Link>
            </button>
          </div>
          <div className="flex flex-col p-10 items-center gap-2 bg-[#252B42]">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-5xl text-[#23A6F0] pb-3"
            />
            <p className="text-white text-sm font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-white text-sm font-semibold">
              georgia.young@ple.com
            </p>
            <p className="text-white text-sm font-semibold pt-3 pb-1">
              Get Support
            </p>
            <button className="text-xs font-semibold py-2 px-3 border-1 border-[#23A6F0] text-[#23A6F0] rounded-3xl ">
              <Link to="/subscribe">Submit Request</Link>
            </button>
          </div>
          <div className="flex flex-col p-10 items-center gap-2 ">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-5xl text-[#23A6F0] pb-3"
            />
            <p className="text-[#252B42] text-sm font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[#252B42] text-sm font-semibold">
              georgia.young@ple.com
            </p>
            <p className="text-[#252B42] text-sm font-semibold pt-3 pb-1">
              Get Support
            </p>
            <button className="text-xs font-semibold py-2 px-3 border-1 border-[#23A6F0] text-[#23A6F0] rounded-3xl ">
              Submit Request
            </button>
          </div>
        </section>
      </section>
      <div className="flex flex-col text-[#252B42] gap-5 sm:px-10 items-center   ">
        <h3 className="font-bold  text-xs">WE Can't WAIT TO MEET YOU</h3>
        <h1 className="font-bold text-center text-5xl ">Let’s Talk</h1>
        <button className="bg-[#23A6F0] text-xs text-white rounded-md py-2 px-3 font-semibold">
          <Link to="/pricing"> Try it for free</Link>
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
