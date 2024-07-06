import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./index.css";

import ShopPage from "./pages/ShopPage";
import Banner from "./components/Banner";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
