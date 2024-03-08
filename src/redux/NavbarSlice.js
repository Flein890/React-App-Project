import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
};

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        toggleNavbar: (state) => {
            console.log(state.isOpen)
            return {...state, isOpen: !state.isOpen};
        },
    }
});

export const {
    toggleNavbar
} = navbarSlice.actions;

export default navbarSlice.reducer