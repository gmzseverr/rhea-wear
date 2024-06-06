import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./index.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productCard" element={<ProductCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
