import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ContactPage() {
  return (
    <div className="pt-32 sm:px-10 px-40 ">
      <div className="px-56 py-28 sm:px-16 flex flex-col items-center ">
        <h2 className="text-5xl font-bold text-center">
          Get answers to all your questions.
        </h2>
        <p className="text-xl py-5 text-center text-[#737373] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <button className=" border bg-[#23A6F0]  text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-100  transition duration-300 ease-in-out">
          CONTACT OUR COMPANY
        </button>
        <div className="flex text-gray-400 gap-4 py-5">
          <FontAwesomeIcon size="xl" icon={faTwitter} />
          <FontAwesomeIcon size="xl" icon={faFacebook} />
          <FontAwesomeIcon size="xl" icon={faInstagram} />
          <FontAwesomeIcon size="xl" icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
