import React from "react";
import { useNavigate } from "react-router-dom";

ProductCard.propTypes = {};

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ecommerce-store/products/${product.id}`);
  };

  return (
    <div className="product_card cursor-pointer" onClick={handleClick}>
      <div className="card_image mb-4">
        <img
          src={product.images}
          alt={product.title}
          className="h-[300px] w-[400px] object-scale-down rounded-lg"
        />
      </div>
      <div className="card_info mb-4">
        <h2 className="mb-2 line-clamp-1">{product.title}</h2>
        <h3>${product.price}</h3>
      </div>
      <button className="max-w-[200px] text-white font-bold text-lg	 bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md">
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
