import {combineReducers} from 'redux'
import { productReducer } from './productReducer'

export const reducers = combineReducers({
    allProducts:productReducer
})

export type RootState = ReturnType<typeof reducers>