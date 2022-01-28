
import { Dispatch } from "react";
import { DispatchModel } from "../../models/dispatchModel";
import { Product } from "../../models/product";
import productApi from "../../pages/api/productApi";
import { ActionTypes } from "../constants/action-types"

export const fetchProducts =  () => async (dispatch:Dispatch<DispatchModel>) => {
        const response = await productApi.get("/products");
        const products: Array<Product>  = response.data
        const newProducts= products.map((product) => new Product(
            product.id, 
            product.title, 
            product.price, 
            product.image, 
            product.category
            ));
        dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:newProducts})
    }
   

