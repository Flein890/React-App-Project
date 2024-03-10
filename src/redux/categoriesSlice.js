import categoriesData from '../data/categoriesData.js'
import { createSlice } from '@reduxjs/toolkit'

const InitialState = {
    categories: categoriesData,
    selectedCategory: null,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: InitialState,
    reducers: {
        selectCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
            };
        },
        categories:state=>{
            return state
        }
    },
})

export const {categories,selectCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;