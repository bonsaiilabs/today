import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ToDos } from "../store/types";
import ToDoForm from "./ToDoForm";
import TodaysGoals from "./TodaysGoals";
import styles from "./Today.module.css";

export const Today: React.FC = () => {
  const todos: ToDos = useSelector((state: RootState) => state.todos);

  return (
    <div className={styles.todayContainer}>
      {todos.all.length === 0 && <ToDoForm />}
      {todos.all.length > 0 && <TodaysGoals todos={todos} />}
    </div>
  );
};
