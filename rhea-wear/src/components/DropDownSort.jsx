import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { setSortOption } from "../redux/actions/productActions";
import { useNavigate, useLocation } from "react-router-dom";

const DropDownSort = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort");

  const options = [
    { label: "Popularity", value: "popularity" },
    { label: "Price: Low to High", value: "price:asc" },
    { label: "Price: High to Low", value: "price:desc" },
    { label: "Rating: High to Low", value: "rating:desc" },
    { label: "Rating: Low to High", value: "rating:asc" },
  ];

  const handleSortSelection = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);

    const params = new URLSearchParams(location.search);
    params.set("sort", option.value);

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    dispatch(setSortOption(option.value));
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        {selectedOption}
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5 text-gray-500"
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSortSelection(option)}
                className="group flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownSort;
