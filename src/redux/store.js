import { configureStore } from "@reduxjs/toolkit";
import cartRducer from './cartSlice'
import apiSliceReducer from './apiSlice'

export const store = configureStore({
    reducer : {
        cart : cartRducer,
        users : apiSliceReducer
    }
})