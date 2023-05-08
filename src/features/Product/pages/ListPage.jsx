import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productApi from "../../../api/productApi";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductList from "../components/ProductList/ProductList";

ListPage.propTypes = {};

function ListPage(props) {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(21);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.getAll(filters);
        if (response.data.length === 0) alert("No data for this category");
        setProductData(response.data);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
      setLoading(false);
    }

    fetchData();
  }, [filters]);

  useEffect(() => {
    navigate({
      pathname: navigate.location,
      search: queryString.stringify(filters),
    });
  }, [navigate, filters]);

  const lastPostIndex = currentPage * productPerPage;
  const firstPostIndex = lastPostIndex - productPerPage;
  const currentData = productData.slice(firstPostIndex, lastPostIndex);

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const handleClickClearFilters = () => {
    setFilters();
  };

  return (
    <div className="container md:mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-0 md:col-span-1">
          {/* <ProductFilters filters={filters} onChange={handleFiltersChange} /> */}
          <ProductFilters filters={filters} onChange={handleFiltersChange} />
          <button
            onClick={handleClickClearFilters}
            className="max-w-[200px] text-white font-bold text-lg	 bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md"
          >
            Clear Filter
          </button>
        </div>
        <div className="col-span-2 md:col-span-3 mb-10">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <ProductList productData={currentData} />
              <Pagination
                totalProduct={productData.length}
                productPerPage={productPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
