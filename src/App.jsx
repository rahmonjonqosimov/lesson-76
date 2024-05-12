import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import ProductCart from "./router/product-cart/ProductCart";
import ProductCheckout from "./router/product-checkut/ProductCheckout";
import "./sass/index.scss";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./router/wishlist/Wishlist";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-cart" element={<ProductCart />} />
        <Route path="product-checkout" element={<ProductCheckout />} />
        <Route path="wishes" element={<Wishlist />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
