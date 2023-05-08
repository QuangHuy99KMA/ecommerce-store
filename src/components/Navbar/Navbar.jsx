import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShopping,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

Navbar.propTypes = {};

function Navbar(props) {
  const [nav, setNav] = useState(false);
  let navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCartClick = () => {
    navigate("/carts");
  };

  return (
    <section className="container  md:mx-auto">
      <div className="flex justify-between items-center h-24 px-4">
        <div className="text-3xl font-bold">
          <a href="/">Quang Huy</a>
        </div>
        <ul className="hidden md:flex">
          <li className="font-bold p-4 text-xl">
            <a href="/">Home</a>
          </li>
          <li className="font-bold p-4 text-xl">
            <a href="/products">Product</a>
          </li>
          <li className="font-bold p-4 cursor-pointer">
            <AiOutlineShopping size={22} onClick={handleCartClick} />
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="cursor-pointer absolute right-4	block md:hidden"
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500"
              : "hidden"
          }
        >
          <ul className="mt-20 w-full shadow-2xl bg-white rounded-2xl	">
            <li className="p-4">
              <a href="/">Home</a>
            </li>
            <li className="p-4">
              <a href="/products">Product</a>
            </li>
            <li className="p-4">
              <AiOutlineShopping size={22} onClick={handleCartClick} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
