import React from "react";
import Checkout from "../../components/checkout/Checkout";
import { motion } from "framer-motion";

const ProductCheckout = () => {
  return (
    <motion.div
      initial={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
      animate={{ transform: "scaleY(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Checkout />
    </motion.div>
  );
};

export default ProductCheckout;
