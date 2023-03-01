import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {counter: 0,showCounter: false }

createSlice({
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
export const INCREMENT = 'increment'

const counterReducer = (state = initialState ,action)=>{
  if(action.type === INCREMENT){
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  } 
  if(action.type === 'increase'){
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }
  if(action.type === 'decrement'){
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'toggle'){
    return{
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }
  return state;
}

const store = createStore(counterReducer);

export default store;