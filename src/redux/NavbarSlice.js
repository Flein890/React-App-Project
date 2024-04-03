import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
};

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        toggleNavbar: (state) => {
            // console.log(state.isOpen)
            return {...state, isOpen: !state.isOpen};
        },
        closeNav: (state) => {
            return {...state, isOpen: false};
        }
    }
});

export const {
    toggleNavbar,
    closeNav
} = navbarSlice.actions;

export default navbarSlice.reducer