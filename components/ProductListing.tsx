import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
const dispatch = useDispatch();
// dispatch props
useEffect(() => {dispatch(fetchProducts())}, []);
 return (
    <div><ProductComponent /></div>
  );
};

export default ProductListing;
