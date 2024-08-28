import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
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
import LoginPage from "./pages/LoginPage";

import { setUser, clearUser } from "./redux/actions/clientActions";
import store from "./redux/store/store";
import HeaderDraft from "./layout/HeaderDraft";

const App = () => {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const userName =
      localStorage.getItem("userName") || sessionStorage.getItem("userName");

    if (token) {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/verify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          dispatch(setUser({ ...response.data, userName }));
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
          dispatch(clearUser());
        });
    }
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/shop" element={<ShopPage />} />

        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
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
        <ToastContainer position="bottom-right" />
      </Router>
    </Provider>
  );
}

export default AppWrapper;
