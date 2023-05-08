import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductThumbnail from "../components/ProductThumbnail/ProductThumbnail";
import productApi from "../../../api/productApi";
import Loading from "../components/Loading/Loading";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import AddToCartForm from "../components/AddToCartForm/AddToCartForm";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/Cart/cartSlice";

DetailPage.propTypes = {};

function DetailPage(props) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const url = useParams();
  const productId = url.productId;
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
        console.log(result.data);
        setProduct(result.data);
      } catch (error) {
        console.log("Fail to fetch product", error);
      }
      setLoading(false);
    })();
  }, [productId]);

  const handleAddToCartSubmit = (values) => {
    let quantityConvertNumber = Number(values.quantity);
    const action = addToCart({
      id: product.id,
      product,
      quantity: quantityConvertNumber,
    });
    dispatch(action);
    console.log(action);
  };

  return (
    <section className="mb-10">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:block">
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-2 gap-10 mx-4">
              <div className="col-span-1">
                <ProductThumbnail product={product} />
              </div>
              <div className="col-span-1">
                <ProductInfo product={product} />
                <AddToCartForm onSubmit={handleAddToCartSubmit} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
