import {
  WATCH_ADD_TODO,
  WATCH_DELETE_TODO,
  WATCH_TODO_LIST,
} from "./constants";

function watchTodoList() {
  return {
    type: WATCH_TODO_LIST,
  };
}

function watchAddTodo(payload: any) {
  return {
    type: WATCH_ADD_TODO,
    payload,
  };
}

function watchDeleteTodo(payload: any) {
  return {
    type: WATCH_DELETE_TODO,
    payload,
  };
}

export { watchTodoList, watchAddTodo, watchDeleteTodo };
