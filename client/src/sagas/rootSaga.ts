import { all } from "redux-saga/effects";
import {
  watchAddTodoItem,
  watchDeleteTodoItem,
  watchFecthingTodoList,
} from "../components/apps/todo/saga/saga";

export default function* rootSaga() {
  yield all([
    //TODO'S SAGA
    watchFecthingTodoList(),
    watchAddTodoItem(),
    watchDeleteTodoItem(),
  ]);
}
