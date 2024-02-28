import React from 'react'
import {createSlice} from '@reduxjs/toolkit'


//navbar with redux

const initialState = {
  value: 0
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})