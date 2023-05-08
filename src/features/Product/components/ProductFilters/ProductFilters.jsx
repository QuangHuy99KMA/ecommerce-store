import React from "react";
import FilterByCategory from "../Filters/FilterByCategory";
import FilterByPrice from "../Filters/FilterByPrice";

ProductFilters.propTypes = {};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      categoryId: newCategoryId,
    };

    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    if (!onChange) return;

    onChange(values);
  };

  return (
    <div className="productFilter hidden md:block mb-6">
      <p className="mb-4 text-xl font-bold">Category List</p>
      <FilterByCategory onChange={handleCategoryChange} />
      <p className="mb-4 text-xl font-bold">Products by Price</p>
      <FilterByPrice onChange={handlePriceChange} />
    </div>
  );
}

export default ProductFilters;
