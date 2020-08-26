export interface ToDo {
  text: string;
}

export interface ToDos {
  all: ToDo[];
}

export const ADD_TODO = "ADD_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ToDo;
}

export type ToDoTypes = AddTodoAction;
