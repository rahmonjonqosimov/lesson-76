import React from "react";
import Products from "../../components/products/Products";
import Swipers from "../../components/swiper/Swiper";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { motion } from "framer-motion";

const Home = () => {
  let limit = useSelector((s) => s.seemore.value);
  let { data, loading } = useFetch(`/products?limit=${limit * 8}`, limit);
  return (
    <motion.div
      initial={{ transform: "scale(0)", transformOrigin: "top" }}
      animate={{ transform: "scale(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Swipers />
      <Products btn={true} data={data?.data} loading={loading} />
    </motion.div>
  );
};

export default Home;
