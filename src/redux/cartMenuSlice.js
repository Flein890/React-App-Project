import {
    addItemToCart,
    removeItemFromCart,   
}  from "./cart-code.js";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    isCartOpen:false,
     remove:null,
};

const cartMenuSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        trueProductModal: (state)=>{
            return {...state ,remove:true}
        },
        falseProductModal: (state)=>{
            return {...state ,remove:false}
        },
        addToCart: (state,action) => {
            // console.log(state.cartItems)
            return {...state, cartItems: addItemToCart(state.cartItems,action.payload),
            };
        },
        removeFromCart: (state,action) =>{
            return { ...state, cartItems:removeItemFromCart(state.cartItems,action.payload,state.remove)}; 
        },
        clearCart:state=> {
            return {...state, cartItems:[]};
        },
        toggleHiddenCart: state=> {
            // console.log(state.hidden)
            return {...state, isCartOpen:!state.isCartOpen};
        },
        //___________________________________
      
    }

});

export const {addToCart, removeFromCart, clearCart, toggleHiddenCart,trueProductModal,falseProductModal} = cartMenuSlice.actions;

export default cartMenuSlice.reducer;