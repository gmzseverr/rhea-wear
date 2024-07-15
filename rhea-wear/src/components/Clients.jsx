import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Clients() {
  return (
    <div className="bg-zinc-50 sm:flex-col flex justify-center items-center space-between  gap-5 py-10">
      <FontAwesomeIcon icon={faHooli} className="text-[#737373] text-7xl" />
      <FontAwesomeIcon icon={faLyft} className="text-[#737373] text-7xl" />
      <FontAwesomeIcon
        icon={faPiedPiperHat}
        className="text-[#737373] text-7xl"
      />
      <FontAwesomeIcon icon={faStripe} className="text-[#737373] text-7xl" />
      <FontAwesomeIcon icon={faAws} className="text-[#737373] text-7xl" />
      <FontAwesomeIcon
        icon={faRedditAlien}
        className="text-[#737373] text-7xl"
      />
    </div>
  );
}

export default Clients;
