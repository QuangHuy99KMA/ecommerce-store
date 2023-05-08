import React from "react";
import PropTypes from "prop-types";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { title, price, description } = product;

  return (
    <div>
      <h1 className="text-2xl	mb-4">{product.title}</h1>
      <div className="text-4xl font-bold mb-4">{product.price}$</div>
      <div className="text-2xl font-extralight mb-4">{product.description}</div>
    </div>
  );
}

export default ProductInfo;
