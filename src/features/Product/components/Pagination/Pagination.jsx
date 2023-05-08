import React from "react";

Pagination.propTypes = {};

function Pagination({ totalProduct, productPerPage, setCurrentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
            className="mx-4 max-w-[200px] text-white font-bold text-base bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md mb-2"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
