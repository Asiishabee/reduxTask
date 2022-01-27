import productApi from "../../pages/api/productApi";
import { ActionTypes } from "../constants/action-types"

export const fetchProducts =  () => async (dispatch) => {
        const response = await productApi.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
    }
   

