import { applyMiddleware, combineReducers, createStore } from "redux";
import todoReducer from "../reducers/todoReducer";
import * as storage from "redux-storage";
// @ts-ignore
import createEngine from "redux-storage-engine-indexed-db";
import { ToDos } from "./types";
import { loadToDos } from "../actions";

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const engine = createEngine("h2-todos-store");
const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

// https://github.com/jaysoo/todomvc-redux-react-typescript/issues/8#issuecomment-406702349
export const store = createStoreWithMiddleware(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const load = storage.createLoader(engine);

// @ts-ignore
load(store).then((newState) => {
  const persistedTodos: ToDos = newState?.todos || [];
  console.log("Loaded State", persistedTodos);
  store.dispatch(loadToDos(persistedTodos));
});
