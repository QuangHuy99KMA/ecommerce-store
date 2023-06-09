import React from "react";
import PropTypes from "prop-types";

function NotFound(props) {
  return (
    <div>
      <div
        className="
    flex
    items-center
    justify-center
    h-screen	
    bg-gradient-to-b from-gray-700 to-black
  "
      >
        <div className="bg-white rounded-md shadow-xl p-8 md:p-12 lg:p-40">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-dark-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              Sorry we couldn't find this page
            </p>
            <a
              href="/"
              className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
