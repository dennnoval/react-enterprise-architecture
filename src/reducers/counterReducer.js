import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle'
  },
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
    incrementIfOdd: (state, action) => {
      const currentVal = state.value
      if (currentVal % 2 === 1) {
        state.value += action.payload
      }
    }
  }
})

export const countSelect = state => state.counter.value

export const { increment, decrement, incrementByAmount, incrementIfOdd } = counterSlice.actions

export default counterSlice.reducer
