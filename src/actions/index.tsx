import { ADD_TODO, LOAD_TODOS, ToDo, ToDos, ToDoTypes } from "../store/types";

export function addTodo(todo: ToDo): ToDoTypes {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function loadToDos(todos: ToDos): ToDoTypes {
  return {
    type: LOAD_TODOS,
    payload: todos,
  };
}
