import React, { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi";

FilterByCategory.propTypes = {};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(list.data);
      } catch (error) {
        console.log("Fail to fetch categorylist", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category);
    }
  };

  return (
    <ul>
      {categoryList.map((category) => {
        return (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="text-lg mb-6 cursor-pointer hover:font-bold capitalize"
          >
            {category.name}
          </li>
        );
      })}
    </ul>
  );
}

export default FilterByCategory;
