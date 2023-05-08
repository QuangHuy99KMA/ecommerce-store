import React from "react";
import ProductCard from "../ProductCard/ProductCard";

ProductList.propTypes = {};

function ProductList({ productData }) {
  return (
    <div className="product_list mb-6">
      <p className="font-bold text-2xl mb-6">Product List</p>

      <div className="grid grid-cols-2 px-4 md:grid-cols-3 gap-10">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
