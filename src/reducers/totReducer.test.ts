import reducer, { initialState } from "./todoReducer";
import {
  ADD_TODO,
  AddTodoAction,
  LOAD_TODOS,
  LoadTodoAction,
  ToDo,
  ToDos,
  ToDoTypes,
} from "../store/types";

describe("todoReducer", () => {
  it("should return the initial state for unknown action", () => {
    expect(reducer(undefined, {} as ToDoTypes)).toEqual(initialState);
  });

  it("should return a new state with todo added from action passed", () => {
    const todo: ToDo = { text: "Add me" };
    const action: AddTodoAction = { type: ADD_TODO, payload: todo };
    const newState = reducer(undefined, action);

    expect(newState.all).toHaveLength(1);
    expect(newState.all[0]).toEqual(todo);
  });

  it("should load todos from the action", () => {
    const todo1: ToDo = { text: "Coming from IndexedDb" };
    const todo2: ToDo = { text: "Make coffee" };
    const todos: ToDos = { all: [todo1, todo2] };
    const action: LoadTodoAction = { type: LOAD_TODOS, payload: todos };
    const newState = reducer(undefined, action);

    expect(newState.all).toHaveLength(2);
    expect(newState.all[0]).toEqual(todo1);
    expect(newState.all[1]).toEqual(todo2);
  });
});
