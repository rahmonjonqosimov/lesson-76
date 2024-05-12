import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { toogleLike } from "../../redux/wishlistSlice";
import { FaHeart } from "react-icons/fa6";
import { incrementItem } from "../../redux/seeMoreSlice";

const Products = ({ loading, data, btn, title }) => {
  let dispatch = useDispatch();
  let products = useSelector((s) => s.cart.value);
  let wishes = useSelector((s) => s.wishes.value);
  let card = data?.map((item) => (
    <div key={item.id} className="card">
      <img src={item?.image} alt={item?.title} />
      <div className="links">
        <button onClick={() => dispatch(addToCart(item))}>
          {products?.some((el) => el.id === item.id) ? (
            <BsCart3 style={{ color: "#46A358" }} />
          ) : (
            <BsCart3 />
          )}
        </button>
        <button onClick={() => dispatch(toogleLike(item))}>
          {wishes?.some((el) => el.id === item.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button>
          <FiSearch />
        </button>
      </div>
      <h3 title={item?.title}>{item?.title}</h3>
      <p> $ {item?.price}</p>
    </div>
  ));

  return (
    <section className="products">
      <h2 className="product__title">{title}</h2>
      <div className="wrapper container">{card}</div>
      {btn ? (
        <div className="btn">
          <button
            disabled={loading}
            onClick={() => dispatch(incrementItem())}
            className="see__more"
          >
            {loading ? "Loading..." : " See More"}
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Products;
