import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  setCurrentPage,
  setSortOption,
  setFilter,
  fetchProducts,
  fetchCategories,
} from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import PaginationShop from "./PaginationShop";
import { Spinner } from "react-bootstrap";
import DropDownSort from "./DropDownSort";

const options = [
  { label: "Popularity", value: "popularity" },
  { label: "Price: Low to High", value: "price:asc" },
  { label: "Price: High to Low", value: "price:desc" },
  { label: "Rating: Low to High", value: "rating:asc" },
  { label: "Rating: High to Low", value: "rating:desc" },
];

function ProductList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const limit = useSelector((state) => state.product.limit);
  const currentPage = useSelector((state) => state.product.currentPage);
  const total = useSelector((state) => state.product.total);
  const products = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);
  const sortOption =
    useSelector((state) => state.product.sortOption) || "popularity";
  const filter =
    useSelector((state) => state.product.filter) || categoryId || "";
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(
      fetchProducts(
        limit,
        (currentPage - 1) * limit,
        filter,
        sortOption,
        categoryId
      )
    );
  }, [dispatch, currentPage, limit, filter, sortOption, categoryId]);

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    return products.sort((a, b) => {
      switch (sortOption) {
        case "price:asc":
          return a.price - b.price;
        case "price:desc":
          return b.price - a.price;
        case "rating:asc":
          return a.rating - b.rating;
        case "rating:desc":
          return b.rating - a.rating;
        default:
          return b.sell_count - a.sell_count;
      }
    });
  }, [products, sortOption]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // "Enter" tuşuna basıldığında filtreyi güncelle
      const newFilter = e.target.value.trim();
      dispatch(setFilter(newFilter)); // Redux'a filtreyi güncelle
      navigate(`${location.pathname}?filter=${newFilter}`); // URL'de filtreyi güncelle
    }
  };

  const handleInputChange = (e) => {
    // Input alanında yazılan her karakteri Redux'a güncelle
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (newSort) => {
    dispatch(setSortOption(newSort));
    navigate(`${location.pathname}?filter=${filter}&sort=${newSort}`);
  };

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (fetchState === "ERROR") {
    return (
      <div className="text-center text-red-500">
        Error loading products. Please try again later.
      </div>
    );
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <DropDownSort
          selectedOption={sortOption}
          sortOptions={options}
          onOptionSelect={handleSortChange}
        />
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange} // Her karakterde Redux'a güncellenir
          onKeyDown={handleKeyDown} // "Enter" tuşu ile filtre uygulanır
          value={filter} // Input değeri Redux'tan alınır
          className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        />
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-1 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => {
            const category = categories.find(
              (cat) => cat.id === product.category_id
            );
            return (
              <ProductCard
                key={product.id}
                product={product}
                category={category}
              />
            );
          })
        ) : (
          <div className="text-center text-gray-500">
            No products available.
          </div>
        )}
      </div>
      <PaginationShop
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProductList;
