import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsCountSelector, cartTotalSelector } from "./selectors";
import initialState from "../Cart/cartSlice";

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const productList = useSelector((state) => state.cart.cartItems);

  console.log(cartItemsCount);
  return (
    <section className="my-10 min-h-[60vh]">
      <div className="container mx-auto">
        {cartTotal > 0 ? (
          <div>
            <p className="text-4xl font-bold py-1 pb-6 text-center">
              Order Summary
            </p>
            <div className="mb-10 text-xl font-bold">
              Total quantity of products: {cartItemsCount}
            </div>
            <div className="text-lg mb-6 grid grid-cols-5 text-center">
              <div className="flex justify-center items-center">
                <p>Product image</p>
              </div>
              <div className="flex justify-center items-center">
                <p>Product name</p>
              </div>
              <div className="flex justify-center items-center">
                <p>Price</p>
              </div>
              <div className="flex justify-center items-center">
                <p>Quantity</p>
              </div>
              <div className="flex justify-center items-center">
                <p>Total of products</p>
              </div>
            </div>
            {productList.map((product) => {
              return (
                <div
                  key={product.id}
                  className="text-lg mb-6 grid grid-cols-5 text-center"
                >
                  <div>
                    <img
                      src={product.product.images}
                      alt="img"
                      className="h-[150px] w-[150px] object-scale-down rounded-lg inline-block"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <p>{product.product.title}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>{product.product.price}$</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>{product.quantity}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>{product.product.price * product.quantity}$</p>
                  </div>
                </div>
              );
            })}
            <div className="grid grid-cols-5 mb-10">
              <div className="flex justify-center items-center font-bold text-xl col-start-4">
                <p>Total: </p>
              </div>
              <div className="flex justify-center items-center font-bold text-xl col-start-5">
                <p>{cartTotal}$</p>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="flex justify-center items-center font-bold text-xl col-start-5">
                <a href="/products" className="w-fit">
                  <button className="max-w-[200px] text-white font-bold text-lg	 bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md">
                    Check out
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-4xl font-bold py-1 pb-6 text-center">
            Your Cart is Empty
          </p>
        )}
      </div>
    </section>
  );
}

export default CartFeature;
