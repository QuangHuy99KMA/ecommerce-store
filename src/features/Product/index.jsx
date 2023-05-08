import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <section>
      <Banner />
      <div className="text-center">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/:productId" element={<DetailPage />} />
        </Routes>
      </div>
    </section>
  );
}

export default ProductFeature;
