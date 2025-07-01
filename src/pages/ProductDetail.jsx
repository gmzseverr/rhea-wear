import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  addToLikedProducts,
  fetchProductById,
  removeFromLikedProducts,
} from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/shoppingCartActions";
import { Spinner } from "react-bootstrap";
import Star from "../components/Star";
import {
  faCartShopping,
  faEye,
  faHeart,
  faChevronLeft,
  faChevronRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import NotUserModal from "../components/NotUserModal";

function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const productDetail = useSelector((state) => state.product.productDetail);
  const fetchState = useSelector((state) => state.product.fetchState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.client);

  const likedProducts = useSelector((state) => state.product.likedProducts);
  const isLiked =
    productDetail &&
    likedProducts.some((likedProduct) => likedProduct.id === productDetail.id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(Number(productId)));
  }, [dispatch, productId]);

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (fetchState === "ERROR" || !productDetail) {
    return (
      <div className="text-center text-red-500">
        Error loading product details. Please try again later.
      </div>
    );
  }

  const { name, description, price, images, stock, rating } = productDetail;

  const isAvailable = stock !== 0 ? "In Stock" : "Not available";

  // Handle next image in the carousel
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous image in the carousel
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImageUrl =
    images && images[currentImageIndex] ? images[currentImageIndex].url : "";

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
      return;
    }
    const quantity = 1;
    console.log("Adding to cart:", {
      id: productDetail.id,
      name: productDetail.name,
      quantity: quantity,
    });
    dispatch(addToCart(productDetail, quantity));
    toast.success("Product added to cart!");
  };

  const handleLikeToggle = () => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
      return;
    }
    const isLiked = likedProducts.some(
      (likedProduct) => likedProduct.id === productDetail.id
    );

    if (isLiked) {
      dispatch(removeFromLikedProducts(productDetail.id));
      console.log("Product removed from liked.");
    } else {
      dispatch(addToLikedProducts(productDetail));
      console.log("Product added to liked.");
    }
  };

  return (
    <div className="pt-0 sm:px-10 px-40">
      <div className="py-3 flex justify-between sm:flex-col">
        <div className="text-sm font-semibold flex items-center mt-2">
          <a href="/" className="text-gray-400 hover:text-[#252B42]">
            Home
          </a>
          <span className="text-gray-400 mx-1">{">"}</span>
          <a href="/shop" className="text-gray-400 hover:text-[#252B42]">
            Shop
          </a>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-[#23A6F0] hover:text-blue-300 font-semibold text-sm"
      >
        <FontAwesomeIcon icon={faCaretLeft} />
        Shop
      </button>
      <div className="flex flex-row gap-8 justify-around sm:grid sm:grid-cols-1 items-center">
        <div className="w-1/2 relative">
          <img
            src={currentImageUrl}
            className="w-full object-cover "
            alt={name}
          />
          <button
            onClick={handlePrevImage}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              color: "#fff",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              color: "#fff",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="pl-4 w-1/2">
          <div>
            <h2 className="pb-3 text-xl text-zinc-950 font-semibold">{name}</h2>
            <Star stars={rating} />
          </div>
          <div>
            <h2 className="text-2xl text-zinc-950 font-bold pt-4">${price}</h2>
            <section className="flex gap-2 pt-2">
              <p className="text-[#737373] font-bold text-sm">Availability:</p>
              <p className="text-[#23A6F0] font-bold text-sm">{isAvailable}</p>
            </section>
          </div>

          <p className="text-[#858585] text-sm pt-5 pb-4">{description}</p>
          <p className="border-t-2 pb-2 text-gray-300"> </p>

          <div className="py-5 flex gap-2 sm:flex-col sm:place-items-center">
            <button
              onClick={handleAddToCart}
              className="w-36 justify-center rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300"
            >
              Add To Cart
            </button>
            <section className="flex gap-2">
              <div
                className={`flex justify-center items-center w-8 h-8 rounded-full ${
                  isLiked
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 hover:bg-gray-400"
                } cursor-pointer`}
                onClick={handleLikeToggle}
              >
                <FontAwesomeIcon icon={faHeart} />
              </div>

              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-400 cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-400 cursor-pointer">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </section>
            <NotUserModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
