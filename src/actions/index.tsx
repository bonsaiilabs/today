import { ADD_TODO, ToDo, ToDoTypes } from "../store/types";

export function addTodo(todo: ToDo): ToDoTypes {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}
