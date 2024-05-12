import React from "react";
import img from "../../assets/images/not-found.jfif";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ transform: "rotate(90deg)" }}
      animate={{ transform: "rotate(0deg)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="container"
    >
      <img src={img} style={{ width: "100%" }} alt="" />
    </motion.div>
  );
};

export default NotFound;
