import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    removeModal: false,
   
};

const productModalSlice = createSlice({
    name: 'productModal',
    initialState: initialState,
    reducers: {
        toggleProductModal: (state) => {
            state.removeModal = !state.removeModal
        },
        closeModalProduct: (state)=>{
            return {...state ,removeModal:false}
        },
    }
})

export const {toggleProductModal,closeModalProduct} = productModalSlice.actions
export default productModalSlice.reducer
