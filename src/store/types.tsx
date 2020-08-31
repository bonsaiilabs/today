export interface ToDo {
  text: string;
}

export interface ToDos {
  all: ToDo[];
}

export const ADD_TODO = "ADD_TODO";
export const LOAD_TODOS = "LOAD_TODOS";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ToDo;
}

export interface LoadTodoAction {
  type: typeof LOAD_TODOS;
  payload: ToDos;
}

export type ToDoTypes = AddTodoAction | LoadTodoAction;
