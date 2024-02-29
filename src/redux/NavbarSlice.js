import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
};

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        open: (state) => {
            console.log(state.isOpen)
            return {...state, isOpen: true};
        },
        close: (state) => {
            console.log(state.isOpen)
            return {...state, isOpen: false};
        }
    }
});

export const {
    open,
    close
} = navbarSlice.actions;

export default navbarSlice.reducer