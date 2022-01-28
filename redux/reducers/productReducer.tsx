import { PayloadAction } from "@reduxjs/toolkit";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: []
};

export const productReducer = (state= initialState,action:PayloadAction<number>) => {

  //action will have type(fetch-produts) and payload(data)
  switch (action.type) {

    case ActionTypes.FETCH_PRODUCTS:
      return {...state, products:action.payload};

    default:
      return state;
      
  }
};
