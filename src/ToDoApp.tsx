import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions/todayActions";
import { RootState } from "./store";

export const ToDoApp: React.FC = () => {
  const EMPTY_TODO: string = "";
  const [todoText, setTodoText] = useState<string>(EMPTY_TODO);
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setTodoText(e.currentTarget.value);

  const onAddClick = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(addTodo({ text: todoText }));
    setTodoText(EMPTY_TODO);
  };

  return (
    <div id={"todo-app"}>
      <h1>My Dashboard</h1>
      <form id={"todo-form"}>
        <input
          type={"text"}
          placeholder={"Enter your task"}
          value={todoText}
          onChange={onTextChange}
        />
        <button onClick={onAddClick}>ADD</button>
      </form>
      <div>
        <h1>All ToDos</h1>
        <div id={"all-todos"}>
          {todos.all.map((todo, key) => (
            <div key={key}>
              <input type={"checkbox"} /> <span>{todo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
