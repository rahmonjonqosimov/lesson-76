import React from "react";
import Products from "../../components/products/Products";
import Swipers from "../../components/swiper/Swiper";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  let limit = useSelector((s) => s.seemore.value);
  let { data, loading } = useFetch(`/products?limit=${limit * 8}`, limit);
  return (
    <>
      <Swipers />
      <Products btn={true} data={data?.data} loading={loading} />
    </>
  );
};

export default Home;
