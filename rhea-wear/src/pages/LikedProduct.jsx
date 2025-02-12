import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLikedProductsFromStorage } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";

function LikedProducts() {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.product.likedProducts);
  const user = useSelector((state) => state.client.user); // kullanıcı bilgilerini Redux'tan alıyoruz

  useEffect(() => {
    // Eğer kullanıcı giriş yaptıysa, liked ürünleri yükle
    if (user?.name) {
      dispatch(loadLikedProductsFromStorage()); // liked ürünleri al
    }
  }, [dispatch, user]);

  return (
    <div className=" sm:px-10 px-40">
      <h2 className="text-3xl font-bold text-center mb-6">
        Favori Ürünleriniz
      </h2>
      {likedProducts.length > 0 ? (
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {likedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={product.category}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">
          Favori ürününüz bulunmamaktadır.
        </p>
      )}
    </div>
  );
}

export default LikedProducts;
