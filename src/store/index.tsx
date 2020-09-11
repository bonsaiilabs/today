import { applyMiddleware, combineReducers, createStore } from "redux";
import todayReducer from "../reducers/todayReducer";
import * as storage from "redux-storage";
// @ts-ignore
import createEngine from "redux-storage-engine-indexed-db";
import { Goals } from "./types";
import { loadGoals } from "../actions/todayActions";
import headerReducer from "../reducers/headerReducer";

export const rootReducer = combineReducers({
  today: todayReducer,
  header: headerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const engine = createEngine("h2-today-store");
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
  const persistedGoals: Goals = newState?.today || [];
  console.log("Loaded State", persistedGoals);
  store.dispatch(loadGoals(persistedGoals));
});
