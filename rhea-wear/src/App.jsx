import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./index.css";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpForm from "./components/SignUpForm";

import store from "./redux/store/store";
import ShoppingCart from "./pages/ShoppingCart";
import OrderPage from "./pages/OrderPage";
import ProtectedRoute from "./services/ProtectedRoute";

import LoginPage from "./pages/LoginPage";

import axios from "axios";
import { setUser } from "./redux/actions/clientActions";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import LikedProducts from "./pages/LikedProduct";

const App = () => {
  const dispatch = useDispatch();

  const checkUserAutoLogin = () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const userName =
      localStorage.getItem("userName") || sessionStorage.getItem("userName");

    if (token) {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("autologin oldu", res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", userName);

          setUser(dispatch, {
            name: userName,
            email: res.data.email,
            avatarUrl: res.data.avatarUrl,
          });
        })
        .catch((error) => {
          console.error("Error during auto-login:", error);

          localStorage.removeItem("token");
          localStorage.removeItem("userName");
        });
    }
  };
  useEffect(() => {
    checkUserAutoLogin();
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={true}
      />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/favorites" element={<LikedProducts />} />
        <Route
          path="/order"
          element={<ProtectedRoute element={<OrderPage />} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

function AppWrapper() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

export default AppWrapper;
