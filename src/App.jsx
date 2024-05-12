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
import NotFound from "./router/not-found/NotFound";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-cart" element={<ProductCart />} />
        <Route path="product-checkout" element={<ProductCheckout />} />
        <Route path="wishes" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <AnimatedCursor
        showSystemCursor={true}
        color="70, 163, 88"
        outerScale={4}
      />
    </>
  );
};

export default App;
