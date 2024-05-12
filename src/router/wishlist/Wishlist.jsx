import React from "react";
import Wishes from "../../components/wishes/Wishes";
import { motion } from "framer-motion";

const Wishlist = () => {
  return (
    <motion.div
      initial={{ transform: "scaleY(0)", transformOrigin: "top" }}
      animate={{ transform: "scaleY(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Wishes />
    </motion.div>
  );
};

export default Wishlist;
