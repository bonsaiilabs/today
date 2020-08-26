import { ToDos, ToDoTypes } from "../store/types";

const initialState: ToDos = { all: [] };

export default (state = initialState, action: ToDoTypes) => {
  switch (action.type) {
    case "ADD_TODO":
      return { all: [...state.all, action.payload] };
    default:
      return state;
  }
};
