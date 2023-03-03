import { createSlice,configureStore } from "@reduxjs/toolkit";
const initialCounterState = {counter: 0,showCounter: false,isAuthenticated: false }

const counterSlice = createSlice({
  name: 'counter ',
  initialState: initialCounterState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state,action){
      state.counter = state.counter + action.payload;
    },
    toogleCounter(state){
      state.showCounter = !state.showCounter
    }
  }

})


const initialAuthState={
  isAuthenticated: false
}
const authSlice = createSlice({
  name: 'authentication',
  initialState: {initialAuthState},
  reducers:{
    login(state){
      state.isLogged = true;
    },
    logout(state){
      state.isLogged = false;
    }
  }
})
const store = configureStore({
  reducer:  {counter: counterSlice.reducer, auth: authSlice.reducer}
});
export const AuthActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;