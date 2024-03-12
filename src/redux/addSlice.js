import { createSlice } from "@reduxjs/toolkit";
import timeOut from './add-code'
const initialState = {
    translate : false
}

export const addSlice = createSlice({
    name:'add',
    initialState:initialState,
    reducers:{
        open: (state) =>{
            console.log(state.translate)
            return {...state, translate: true }  
        },
        close: (state) =>{
            console.log(state.translate)
            return {...state, translate: false }
        }
    }
})

export const {open,close} = addSlice.actions
export default addSlice.reducer