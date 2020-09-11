import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ToDos } from "../store/types";
import ToDoForm from "./ToDoForm";

export const Today: React.FC = () => {
  const todos: ToDos = useSelector((state: RootState) => state.todos);

  return (
    <div>
      {todos.all.length === 0 && <ToDoForm />}
      {todos.all.length > 0 && (
        <div>
          <h1>All ToDos</h1>
          <div id={"all-todos"}>
            {todos.all.map((todo, key) => (
              <div key={key}>
                <input type={"checkbox"} />
                <span>{todo.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
