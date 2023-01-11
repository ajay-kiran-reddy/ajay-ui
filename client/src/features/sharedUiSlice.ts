import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

// Define a type for the slice state
interface SharedUiState {
  snackBar: SnackBar;
}

interface State {
  sharedUi: SharedUiState;
}

interface SnackBar {
  open: boolean;
  severity?: string;
  message: string;
}

// Define the initial state using that type
const initialState: SharedUiState = {
  snackBar: {
    open: false,
    severity: "info",
    message: "",
  },
};

const sharedUISlice: any = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeSnackBarData: (state, action) => {
      state.snackBar = action.payload;
    },
  },
});

export const { storeSnackBarData } = sharedUISlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const snackBar = (state: State) => state.sharedUi?.snackBar;

export default sharedUISlice.reducer;
