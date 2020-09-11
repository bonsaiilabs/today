import React from "react";
import { ToDos } from "../store/types";
import styles from "./TodaysGoals.module.css";

interface TodaysGoalsProps {
  todos: ToDos;
}

const TodaysGoals: ({ todos }: TodaysGoalsProps) => JSX.Element = ({
  todos,
}) => {
  return (
    <div className={styles.goalsContainer}>
      <div id={"all-todos"}>
        {todos.all.map((todo, key) => (
          <div key={key}>
            <input type={"checkbox"} />
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysGoals;
