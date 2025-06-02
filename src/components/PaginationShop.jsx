import React from "react";
import { scroller } from "react-scroll";

const PaginationShop = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
      scroller.scrollTo("top", {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <div className="flex justify-center mt-4 space-x-0 font-semibold">
      <button
        onClick={() => handleClick(1)}
        disabled={currentPage <= 1}
        className="py-4 px-4 border border-gray-300 bg-white text-[#23A6F0] hover:bg-gray-100 disabled:opacity-50 rounded-l-lg disabled:text-gray-400 "
      >
        First
      </button>
      {currentPage > 3 && (
        <button
          onClick={() => handleClick(currentPage - 2)}
          className={`py-2 px-4 border border-gray-300 ${
            currentPage === currentPage - 2
              ? "bg-[#23A6F0] text-white"
              : "bg-white text-[#23A6F0] hover:bg-gray-100"
          } rounded-none`}
        >
          {currentPage - 2}
        </button>
      )}
      {currentPage > 2 && (
        <button
          onClick={() => handleClick(currentPage - 1)}
          className={`py-2 px-4 border border-gray-300 ${
            currentPage === currentPage - 1
              ? "bg-[#23A6F0] text-white"
              : "bg-white text-[#23A6F0] hover:bg-gray-100"
          } rounded-none`}
        >
          {currentPage - 1}
        </button>
      )}
      <button
        className={`py-2 px-4 border border-gray-300 ${
          currentPage === currentPage
            ? "bg-[#23A6F0] text-white"
            : "bg-white text-[#23A6F0] hover:bg-gray-100"
        } rounded-none`}
      >
        {currentPage}
      </button>
      {currentPage < totalPages && (
        <button
          onClick={() => handleClick(currentPage + 1)}
          className={`py-2 px-4 border border-gray-300 ${
            currentPage === currentPage + 1
              ? "bg-[#23A6F0] text-white"
              : "bg-white text-[#23A6F0] hover:bg-gray-100"
          } rounded-none`}
        >
          {currentPage + 1}
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button
          onClick={() => handleClick(currentPage + 2)}
          className={`py-2 px-4 border border-gray-300 ${
            currentPage === currentPage + 2
              ? "bg-[#23A6F0] text-white"
              : "bg-white text-[#23A6F0] hover:bg-gray-100"
          } rounded-none`}
        >
          {currentPage + 2}
        </button>
      )}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="py-2 px-4 border border-gray-300 bg-white text-[#23A6F0] hover:bg-gray-100 disabled:opacity-50 rounded-r-lg "
      >
        Next
      </button>
    </div>
  );
};

export default PaginationShop;
