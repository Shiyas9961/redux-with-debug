import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList : [],
    cartCount : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addTocart : (state, action) => {
            const alreadyExist = state?.cartList?.find(item => item.id === action?.payload.id)
            if(alreadyExist){
                alreadyExist.count = 1
            }else{
                state.cartList.push({
                    ...action?.payload,
                    count : 1
                })
            }
        },
        increment : (state, action) => {
            const cart = state?.cartList?.find(item => {
                return item.id === action.payload
            })
            cart.count += 1
        },
        decrement : (state, action) => {
            const cart = state?.cartList?.find(item => {
                return item.id === action?.payload
            })
            cart.count -= 1
        }
    }
})

export const { addTocart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer