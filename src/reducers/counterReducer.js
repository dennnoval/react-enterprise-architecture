import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCount } from '../services'

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount)
    return response.data
  }
)

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
    },
    extraReducers: {
      [incrementAsync.pending]: (state) => {
        state.status = 'pending'
      },
      [incrementAsync.fulfilled]: (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      }
    }
  }
})

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementIfOdd
} = counterSlice.actions

export default counterSlice.reducer
