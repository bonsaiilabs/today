import React from "react";
import { ToDos } from "../store/types";
import styles from "./TodaysGoals.module.css";

interface TodaysGoalsProps {
  todos: ToDos;
}

const MAX_GOALS_ALLOWED = 3;

const TodaysGoals: ({ todos }: TodaysGoalsProps) => JSX.Element = ({
  todos,
}) => {
  const numGoalsRemaining = MAX_GOALS_ALLOWED - todos.all.length;
  return (
    <div className={styles.goalsContainer}>
      <div id={"all-todos"}>
        {todos.all.map((todo, key) => (
          <div key={key} className={styles.todoRow}>
            <input type={"checkbox"} />
            <span>{todo.text}</span>
            <button>START</button>
          </div>
        ))}
      </div>
      <div className={styles.messageContainer}>
        <p>
          You can add {numGoalsRemaining} more goals for today, but it is not
          required. <i>Less is more. Focus on completing 1 task well</i>
        </p>
        <button>Add a goal for today</button>
      </div>
    </div>
  );
};

export default TodaysGoals;
