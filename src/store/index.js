import { createSlice, configureStore } from '@reduxjs/toolkit';
import { counterSlice as counterSlice_1 } from './counter_1.store';
import { counterSlice as counterSlice_2 } from './counter_2.store';
// const counterSlice = createSlice({
//  name: 'counter',
//  initialState: {
//   counter_1: { value: 20 },
//   counter_2: { value: 0 },
//  },
//  reducers: {
//   increment_1 (state, action) {
//    state.counter_1.value += action.payload;
//   },
//   decrement_1 (state, action) {
//    state.counter_1.value -= action.payload;
//   },
//   increment_2 (state, action) {
//    state.counter_2.value += action.payload;
//   },
//   decrement_2 (state, action) {
//    state.counter_2.value -= action.payload;
//   }
//  }
// });

// export const actions = counterSlice.actions;

export default configureStore({
 // reducer: counterSlice.reducer
 reducer: {
  counter_1: counterSlice_1.reducer,
  counter_2: counterSlice_2.reducer,
 }
});