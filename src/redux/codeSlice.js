import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    code: false,
};

export const codeSlice = createSlice({
    name: "code",
    initialState,
    reducers: {
        setBooleanToTrue: (state) => {
            return {
                ...state,
                code: true
            };
        },

        switchBoolean: (state) => {
            return {
                ...state,
                code: !state.code
            };
        },
    },
});

export const { setBooleanToTrue,switchBoolean } = codeSlice.actions;
export default codeSlice.reducer;