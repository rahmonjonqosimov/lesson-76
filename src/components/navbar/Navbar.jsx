import React, { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
  let data = useSelector((s) => s.cart.value);
  let wishes = useSelector((s) => s.wishes.value);
  const [menu, setMenu] = useState(false);
  let item = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Shop",
      url: "/product-checkout",
    },
    {
      id: 3,
      name: "Plant Care",
      url: "/plant-care",
    },
    {
      id: 4,
      name: "Blogs",
      url: "/blog",
    },
  ];
  let linkItems = item?.map((el) => (
    <li key={el.id}>
      <NavLink to={el.url}>{el.name}</NavLink>
    </li>
  ));
  return (
    <section className="navbar">
      <div className="container navbar__content">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={`links ${menu ? "show" : ""}`}>{linkItems}</ul>
        <ul className="link">
          <li>
            <Link>
              <FiSearch />
            </Link>
          </li>
          <li>
            <Link to={"/product-cart"}>
              <BsCart3 />
              <sup>{data.length}</sup>
            </Link>
          </li>
          <li>
            <Link to={"/wishes"}>
              <FaRegHeart />
              <sup>{wishes.length}</sup>
            </Link>
          </li>
        </ul>
        <div
          className={`menu ${menu ? "show" : ""}`}
          onClick={() => setMenu((p) => !p)}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
