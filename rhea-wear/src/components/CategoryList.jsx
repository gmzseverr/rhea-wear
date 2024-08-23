import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCategories } from "../redux/actions/categoryActions";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category?.categories || []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Kadın ve Erkek kategorilerini filtrele
  const womenCategories = categories.filter(
    (category) => category.code.split(":")[0] === "k"
  );
  const menCategories = categories.filter(
    (category) => category.code.split(":")[0] === "e"
  );

  return (
    <div className="flex w-40 ">
      <div>
        <h3 className="px-4 py-2 text-md font-bold text-gray-900">Kadın</h3>
        {womenCategories.map((category) => (
          <NavLink
            key={category.id}
            to={`/shop/${category.code.split(":")[0]}/${category.title}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            {category.title}
          </NavLink>
        ))}
      </div>
      <div>
        <h3 className="px-4 py-2 text-md font-bold text-gray-900">Erkek</h3>
        {menCategories.map((category) => (
          <NavLink
            key={category.id}
            to={`/shop/${category.code.split(":")[0]}/${category.title}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            {category.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
