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
        closeModalCheck: (state)=>{
            return {...state ,modalOpen:false}
        }
    }
    
});

export const {toggleModal,closeModalCheck} = modalSlice.actions

export default modalSlice.reducer