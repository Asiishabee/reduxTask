import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    console.log("hello");
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
