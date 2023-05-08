import React, { useState } from "react";

FilterByPrice.propTypes = {};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    price_min: 0,
    price_max: 0,
  });

  const handlePriceChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  return (
    <div>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
        name="price_min"
        value={values.minPrice}
        onChange={handlePriceChange}
        type="text"
        placeholder="From price"
      />
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
        name="price_max"
        value={values.maxPrice}
        onChange={handlePriceChange}
        type="text"
        placeholder="To price"
      />
      <div>
        <button
          onClick={handleSubmit}
          className="max-w-[200px] text-white font-bold text-lg	 bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterByPrice;
