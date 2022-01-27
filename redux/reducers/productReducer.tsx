import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [{
    title:"aisa",
    price:"100",
    
  }]
 
};

export const productReducer = (state= initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {...state, products:payload};

    case ActionTypes.SET_PRODUCTS:
      return {...state, products:payload};

    default:
      return state;
  }
};
