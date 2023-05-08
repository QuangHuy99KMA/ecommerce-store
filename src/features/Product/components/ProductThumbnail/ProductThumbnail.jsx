import React from "react";
import PropTypes from "prop-types";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  return <img src={product.images} alt="img-product" className="rounded-lg	" />;
}

export default ProductThumbnail;
