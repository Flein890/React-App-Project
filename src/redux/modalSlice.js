import { createSlice } from "@reduxjs/toolkit";

const initialState={
    modalOpen:false,
};

export const modalSlice= createSlice({
    name:'modal',
    initialState:initialState,
    reducers:{
        toggleModal: (state)=>{
            return {...state ,modalOpen:!state.modalOpen}
        },
    }
    
});

export const {toggleModal} = modalSlice.actions

export default modalSlice.reducer