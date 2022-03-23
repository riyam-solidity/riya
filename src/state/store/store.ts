import reducers from "../ducks";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({ ...reducers });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const dispatch = store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
