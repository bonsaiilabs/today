import React, { useState } from "react";

export const ToDoApp: React.FC = () => {
  const EMPTY_TODO: string = "";
  const [todos, setTodos] = useState<string[]>([]);
  const [todoText, setTodoText] = useState<string>(EMPTY_TODO);

  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setTodoText(e.currentTarget.value);
  const onAddClick = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setTodos((currentToDos) => [...currentToDos, todoText]);
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
          {todos.map((todo, key) => (
            <p key={key}>{todo}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
