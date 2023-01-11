import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

// Define a type for the slice state
interface TodoState {
  todoList: Array<any>;
  todoAddItem: string;
  todoDeleteItem: string;
}

// interface State {
//   todo: TodoState;
// }

// Define the initial state using that type
const initialState: TodoState = {
  todoList: [],
  todoAddItem: "",
  todoDeleteItem: "",
};

const todoSlice: any = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    addTodoItem: (state, action) => {
      state.todoAddItem = action.payload;
    },
    deleteTodoItem: (state, action) => {
      state.todoDeleteItem = action.payload;
    },
  },
});

export const { storeTodoList, addTodoItem, deleteTodoItem } = todoSlice.actions;

// Export Selectors

export const todoList = (state: any) => state.todo.todoList;
export const todoAddItem = (state: any) => state.todo.todoAddItem;
export const todoDeleteItem = (state: any) => state.todo.todoDeleteItem;

export default todoSlice.reducer;
