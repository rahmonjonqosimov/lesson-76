import React from "react";
import Cart from "../../components/cart/Cart";
import { motion } from "framer-motion";

const ProductCart = () => {
  return (
    <motion.div
      initial={{ transform: "scaleX(0)", transformOrigin: "right" }}
      animate={{ transform: "scaleX(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Cart />
    </motion.div>
  );
};

export default ProductCart;
