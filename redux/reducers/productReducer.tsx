import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [{
    title:"asisa",
    price: "60",
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }]
 
};

export const productReducer = (state= initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products:payload};
    default:
      return state;
  }
};
