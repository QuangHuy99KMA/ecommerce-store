import PropTypes from "prop-types";
import React from "react";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  return (
    <div>
      <h1 className="text-2xl	mb-4">{product.title}</h1>
      <div className="text-4xl font-bold mb-4">{product.price}$</div>
      <div className="text-2xl font-extralight mb-4">{product.description}</div>
    </div>
  );
}

export default ProductInfo;
