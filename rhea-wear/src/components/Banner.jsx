import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Banner() {
  return (
    <div className="bg-[#252B42] py-3 px-8 flex justify-between items-center md:hidden ">
      <section className="flex gap-3">
        <div className="text-white flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} size="sm" className="  " />
          <p className="text-sm cursor-pointer">(225) 555-0118</p>
        </div>
        <div className="text-white flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} size="sm" className="  " />
          <p className="text-sm cursor-pointer ">michelle.rivera@example.com</p>
        </div>
      </section>
      <p className="text-sm font-semibold text-white">
        Follow Us and get a chance to win 80% off
      </p>
      <div className="text-white flex gap-2 items-center">
        <p className="text-sm font-semibold text-white">Follow us:</p>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Banner;
