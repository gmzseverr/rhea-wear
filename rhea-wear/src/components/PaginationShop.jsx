import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import React from "react";

function PaginationShop() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      discountedPrice: "$11.90",
      image: "src/assets/hero-2.png",
      category: "Clothes",
      description: "This is a great product for any occasion.",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      name: "Graphic Design",
      price: "$16.48",
      discountedPrice: "$6.48",
      image: "src/assets/editors2.png",
      category: "Clothes",
      description: "Perfect for your creative projects.",
      colors: ["#23A6F0", "#23856D", "#E77C40"],
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col  border-gray-200 bg-white px-4 py-3 sm:px-6 h-24">
      <div className="flex flex-1 justify-between sm:hidden mb-4">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-sm w-80"
        >
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-[#23A6F0] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23A6F0]"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
            ...
          </span>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default PaginationShop;
