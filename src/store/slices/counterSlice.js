import { createSlice } from "@reduxjs/toolkit"
import userSlice from "./userSlice"

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
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

export const selectUser = (rootState) => rootState.user.user

export default userSlice.reducer