import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
 name: 'counter_1',
 initialState: { value: 20 },
 reducers: {
  increment (state, action) {
   state.value += action.payload;
  },
  decrement (state, action) {
   state.value -= action.payload;
  }
 }
});

export const actions = counterSlice.actions;