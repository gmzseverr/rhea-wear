import React from "react";
import members from "../data/members.json";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamMembers() {
  return (
    <div className="pt-32 sm:px-10 px-40">
      <section className="flex items-center flex-col ">
        <h1 className="font-bold text-4xl pb-2 text-center ">Meet Our Team</h1>
        <p className="text-sm text-[#737373] pt-2 text-center sm:text-wrap">
          Problems trying to resolve the conflict between{" "}
          <br className="sm:hidden" /> the two major realms of Classical
          physics: Newtonian mechanics{" "}
        </p>
      </section>
      <section className="flex justify-between pt-28 sm:flex-col sm: items-center">
        <div className="w-80 h-96 flex flex-col items-center">
          <img
            src="public/assets/erhan-firat.png"
            alt=""
            className="object-cover w-80 h-60"
          />
          <h5 className="font-bold text-slate-800 pt-8 ">Erhan Fırat</h5>
          <h6 className="text-sm text-neutral-500 font-bold py-2 ">
            Project Owner
          </h6>
          <div className="flex gap-3 ">
            <a href="#" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="#" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="#" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </div>
        </div>
        <div className="w-80 h-96 flex flex-col items-center">
          <img
            src="public/assets/gokhan-ozdemir.png"
            alt=""
            className="object-cover w-80 h-60"
          />
          <h5 className="font-bold text-slate-800 pt-8 ">Gökhan Özdemir</h5>
          <h6 className="text-sm text-neutral-500 font-bold py-2 ">
            Scrum Master
          </h6>
          <div className="flex gap-3 ">
            <a href="#" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="#" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="#" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </div>
        </div>
        <div className="w-80 h-96 flex flex-col items-center">
          <img
            src="public/assets/editors3.png"
            alt=""
            className="object-cover w-80 h-60"
          />
          <h5 className="font-bold text-slate-800 pt-8 ">Username</h5>
          <h6 className="text-sm text-neutral-500 font-bold py-2 ">
            Profession
          </h6>
          <div className="flex gap-3 ">
            <a href="#" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="#" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="#" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamMembers;
