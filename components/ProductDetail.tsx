import React from "react";
import { useSelector } from "react-redux";


const ProductDetails= () =>{
    const products = useSelector((state) => state.allProducts.products)

    return(
        <div>
            <h1>ProductListing</h1>
        </div>
    )
}

export default ProductDetails