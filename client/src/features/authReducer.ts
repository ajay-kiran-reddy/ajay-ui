import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  value: number;
  userData: Object;
}

interface State {
  auth: CounterState;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  userData: {},
};

export const authSlice: any = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeUserDetails: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { storeUserDetails } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const userData = (state: State) => state.auth.userData;

export default authSlice.reducer;
