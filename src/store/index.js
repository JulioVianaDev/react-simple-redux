import { createSlice,configureStore } from "@reduxjs/toolkit";
const initialState = {counter: 0,showCounter: false }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state,action){
      state.counter = state.counter + action.amount
    },
    toogleCounter(state){
      state.showCounter = !state.showCounter
    }
  }

})
// export const INCREMENT = 'increment'

const store = configureStore({
  reducer: {counter: counterSlice.reducer,}
});

export default store;