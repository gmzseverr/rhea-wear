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
    <div className="bg-gray-100 flex justify-center items-center space-x-8 py-4">
      <FontAwesomeIcon icon={faHooli} size="2xl" className="text-[#737373]" />
      <FontAwesomeIcon icon={faLyft} size="2xl" className="text-[#737373]" />
      <FontAwesomeIcon
        icon={faPiedPiperHat}
        size="2xl"
        className="text-[#737373]"
      />
      <FontAwesomeIcon icon={faStripe} size="2xl" className="text-[#737373]" />
      <FontAwesomeIcon icon={faAws} size="2xl" className="text-[#737373]" />
      <FontAwesomeIcon
        icon={faRedditAlien}
        size="2xl"
        className="text-[#737373]"
      />
    </div>
  );
}

export default Clients;
