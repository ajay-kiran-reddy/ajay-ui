import { useSelector } from "react-redux";
import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  ADD_TODO,
  API_END_POINT,
  DELETE_TODO,
  FETCH_TODODS,
} from "../../../../constants/apiKeys";
import { storeSnackBarData } from "../../../../features/sharedUiSlice";
import {
  API_METHODS,
  callAPI,
  ResponseGenerator,
} from "../../../../sagas/sagaUtils";
import {
  WATCH_ADD_TODO,
  WATCH_DELETE_TODO,
  WATCH_TODO_LIST,
} from "./constants";
import {
  addTodoItem,
  deleteTodoItem,
  storeTodoList,
  todoAddItem,
  todoDeleteItem,
} from "./todoSlice";

function* actionFetchTodos(): any {
  try {
    const result: ResponseGenerator = yield call(() =>
      callAPI({
        method: API_METHODS.GET,
        url: `${API_END_POINT}${FETCH_TODODS}`,
      })
    );
    yield put(storeTodoList(result.data));
  } catch (e: any) {
    console.log(e, "ERROR");
    yield put(
      storeSnackBarData({
        message: e?.data?.message,
        severity: "error",
        open: true,
      })
    );
  }
}

function* actionAddTodo(): any {
  try {
    let todoItem = yield select(todoAddItem);
    console.log(todoItem, "[todoItem]");
    yield call(() => {
      callAPI({
        method: API_METHODS.POST,
        url: `${API_END_POINT}${ADD_TODO}`,
        data: todoItem,
      });
    });

    const todoData: ResponseGenerator = yield call(() =>
      callAPI({
        method: API_METHODS.GET,
        url: `${API_END_POINT}${FETCH_TODODS}`,
      })
    );
    yield put(storeTodoList(todoData.data));
  } catch (e: any) {
    yield put(
      storeSnackBarData({
        message: e?.data?.message,
        severity: "error",
        open: true,
      })
    );
  }
}

function* actionDeleteTodo(): any {
  try {
    let todoItem: ResponseGenerator = yield select(todoDeleteItem);
    yield call(() => {
      callAPI({
        method: API_METHODS.POST,
        url: `${API_END_POINT}${DELETE_TODO}`,
        data: todoItem,
      });
    });

    const todoData: ResponseGenerator = yield call(() =>
      callAPI({
        method: API_METHODS.GET,
        url: `${API_END_POINT}${FETCH_TODODS}`,
      })
    );
    yield put(storeTodoList(todoData.data));
  } catch (e: any) {
    yield put(
      storeSnackBarData({
        message: e?.data?.message,
        severity: "error",
        open: true,
      })
    );
  }
}

export function* watchFecthingTodoList() {
  yield takeEvery(WATCH_TODO_LIST, actionFetchTodos);
}

export function* watchAddTodoItem() {
  yield takeEvery(addTodoItem, actionAddTodo);
}

export function* watchDeleteTodoItem() {
  yield takeEvery(deleteTodoItem, actionDeleteTodo);
}
