import React from "react";
import ProductCard from "../components/ProductCard";
import ShopImageSection from "../components/ShopImageSection";
import DropDownSort from "../components/DropDownSort";
import PaginationShop from "../components/PaginationShop";
import Clients from "../components/Clients";
import { faGrip, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "../data/products.json";

/*const products = [
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
  {
    id: 3,
    name: "Graphic Design",
    price: "$12.58",
    discountedPrice: "$6.48",
    image: "src/assets/editors1.png",
    category: "Clothes",
    description: "Perfect for your creative projects.",
    colors: ["#23A6F0", "#23856D", "#E77C40"],
  },
  {
    id: 4,
    name: "Graphic Design",
    price: "$22.48",
    discountedPrice: "$12.48",
    image: "src/assets/hero-1.png",
    category: "Clothes",
    description: "Perfect for your creative projects.",
    colors: ["#23A6F0", "#23856D", "#E77C40"],
  },
];*/

function ShopPage() {
  return (
    <div>
      <div className="pt-32 sm:px-10 px-40">
        <div>
          <div className="py-3 flex justify-between sm:flex-col">
            <h2 className="text-[#252B42] font-bold text-2xl">Shop</h2>
            <div className="text-sm font-semibold flex items-center mt-2">
              <a href="#" className="text-gray-400 hover:text-[#252B42]">
                Home
              </a>
              <span className="text-gray-400 mx-1">{">"}</span>
              <a href="#" className="text-gray-400 hover:text-[#252B42]">
                Shop
              </a>
            </div>
          </div>

          <ShopImageSection />

          <section className="flex justify-between items-center py-5 sm:flex sm:flex-col sm:gap-4">
            <div>
              <p className="text-sm text-gray-500 font-bold">
                Showing all results
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <h4 className="mr-1 text-sm text-gray-500 font-bold">Views:</h4>
              <div className="flex gap-2">
                <FontAwesomeIcon
                  icon={faGrip}
                  size="lg"
                  className="border border-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-200 text-[#252B42]"
                />
                <FontAwesomeIcon
                  icon={faListUl}
                  size="lg"
                  className="border border-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-200 text-gray-500"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <DropDownSort />
              <button className="inline-flex justify-center gap-x-1.5 rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300">
                Filter
              </button>
            </div>
          </section>
        </div>
        <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-col">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <section className="flex items-center justify-center py-5">
          <PaginationShop />
        </section>
      </div>
      <div className="w-full bg-zinc-100">
        <Clients />
      </div>
    </div>
  );
}

export default ShopPage;
