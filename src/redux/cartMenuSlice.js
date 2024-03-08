import {
    addItemToCart,
    removeItemFromCart,   
}  from "./cart-code.js";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    isCartOpen:false,
};

const cartMenuSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state,action) => {
            // console.log(state.cartItems)
            return {...state, cartItems: addItemToCart(state.cartItems,action.payload),
            };
        },
        removeFromCart: (state,action) =>{
            return { ...state, cartItems:removeItemFromCart(state.cartItems,action.payload)}; 
        },
        clearCart:state=> {
            return {...state, cartItems:[]};
        },
        toggleHiddenCart: state=> {
            // console.log(state.hidden)
            return {...state, isCartOpen:!state.isCartOpen};
        }
    }

});

export const {addToCart, removeFromCart, clearCart, toggleHiddenCart} = cartMenuSlice.actions;

export default cartMenuSlice.reducer;