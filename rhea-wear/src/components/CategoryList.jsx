import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCategories, setFilter } from "../redux/actions/productActions";

const CategoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.product?.categories || []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const womenCategories = categories.filter(
    (category) => category.gender === "k"
  );
  const menCategories = categories.filter(
    (category) => category.gender === "e"
  );

  const handleCategoryChange = (gender, code, categoryId) => {
    // Navigate to the category page
    navigate(`/shop/${gender}/${code}/${categoryId}`);

    // Dispatch action to set the filter in the product list
    dispatch(setFilter(categoryId));
  };

  return (
    <div className="flex w-full space-x-8">
      <div className="w-1/2">
        <h3 className="px-4 py-2 text-md font-bold text-gray-900">Kadın</h3>
        {womenCategories.length > 0 ? (
          womenCategories.map((category) => (
            <div
              key={category.id}
              onClick={() =>
                handleCategoryChange("kadin", category.code, category.id)
              }
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 flex-shrink-0 cursor-pointer"
            >
              <div className="flex flex-col">
                <span>{category.title}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="px-4 py-2 text-sm text-gray-700">
            No categories available
          </p>
        )}
      </div>
      <div className="w-1/2">
        <h3 className="px-4 py-2 text-md font-bold text-gray-900">Erkek</h3>
        {menCategories.length > 0 ? (
          menCategories.map((category) => (
            <div
              key={category.id}
              onClick={() =>
                handleCategoryChange("erkek", category.code, category.id)
              }
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 flex-shrink-0 cursor-pointer"
            >
              <div className="flex flex-col">
                <span>{category.title}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="px-4 py-2 text-sm text-gray-700">
            No categories available
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
