import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ stars }) {
  const [hover, setHover] = useState(null);

  const renderStar = (index) => {
    const rating = hover ?? stars;
    let number = index + 0.5;

    // Determine the icon to display based on rating and hover state
    if (rating >= index + 1) {
      return FaStar;
    } else if (rating >= number) {
      return FaStarHalfAlt;
    } else {
      return AiOutlineStar;
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => {
        const Icon = renderStar(index);

        return (
          <Icon
            key={index}
            size={20} // Set a consistent size for all icons
            color={index < (hover ?? stars) ? "#ffc107" : "#e4e5e9"} // Fill color for stars
            className="cursor-pointer" // Pointer cursor to indicate interactivity
            onMouseEnter={() => setHover(index + 1)} // Preview rating on hover
            onMouseLeave={() => setHover(null)} // Reset hover state
          />
        );
      })}
    </div>
  );
}

export default Star;
