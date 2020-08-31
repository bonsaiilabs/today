import { ADD_TODO, LOAD_TODOS, ToDo, ToDos } from "../store/types";
import { addTodo, loadToDos } from "./index";

describe("ToDo Actions", () => {
  it("should create an action to add a todo", () => {
    const todo: ToDo = { text: "Create the action" };
    const expectedAction = { type: ADD_TODO, payload: todo };
    expect(addTodo(todo)).toEqual(expectedAction);
  });

  it("should create an action to load todos", () => {
    const todo: ToDo = { text: "Load the todos" };
    const todos: ToDos = { all: [todo] };
    const expectedAction = { type: LOAD_TODOS, payload: todos };
    expect(loadToDos(todos)).toEqual(expectedAction);
  });
});
