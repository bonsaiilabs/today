import { combineReducers, createStore } from "redux";
import todoReducer from "../reducers/todoReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// https://github.com/jaysoo/todomvc-redux-react-typescript/issues/8#issuecomment-406702349
export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
