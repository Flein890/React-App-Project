import {configureStore } from "@reduxjs/toolkit";
import navbarReducer from '../redux/NavbarSlice'

const store = configureStore({
    reducer: navbarReducer
})
export default store