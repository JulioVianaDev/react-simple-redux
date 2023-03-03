import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/CounterSlice";
import { authSlice } from "./slices/AuthSlice";



const store = configureStore({
  reducer:  {counter: counterSlice.reducer, auth: authSlice.reducer}
});
export const AuthActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;