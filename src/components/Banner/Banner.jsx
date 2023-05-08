import React from "react";
import ShopCart from "../../assets/shopping-cart-osnmdfg.png";

function Banner(props) {
  return (
    <section className="my-10">
      <div className="container mx-auto grid md:grid-cols-2">
        <img className="w-[350px] mx-auto my-4" src={ShopCart} alt="/" />
        <div className="flex flex-col justify-center mx-4 md:mx-0">
          <p className="text-gray-700 font-bold pb-3">
            Everything you need here
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pb-3">
            Buy with us
          </h1>
          <p className="text-justify pb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="/ecommerce-store/products" className="w-fit">
            <button className="max-w-[200px] text-white font-bold text-lg	 bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
