import authSlice from "./features/authReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas/rootSaga";
import logger from "redux-logger";
import sharedUiSlice from "./features/sharedUiSlice";
import todoSlice from "./components/apps/todo/saga/todoSlice";

let sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  logger,
];

export const store = configureStore({
  reducer: {
    auth: authSlice,
    sharedUi: sharedUiSlice,
    todo: todoSlice,
  },
  middleware,
});

sagaMiddleware.run(saga);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
