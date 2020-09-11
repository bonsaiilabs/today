import React, { useEffect } from "react";
import { Goals } from "../store/types";
import styles from "./TodaysGoals.module.css";
import { MAX_GOALS_ALLOWED } from "../reducers/todayReducer";
import { useDispatch } from "react-redux";
import { addNewGoal } from "../actions/todayActions";

interface TodaysGoalsProps {
  goals: Goals;
}

const TodaysGoals: ({ goals }: TodaysGoalsProps) => JSX.Element = ({
  goals,
}) => {
  const numGoalsRemaining = MAX_GOALS_ALLOWED - goals.all.length;
  return (
    <div className={styles.goalsContainer}>
      <div>
        {goals.all.map((goal, key) => (
          <div key={key} className={styles.goalRow}>
            <input type={"checkbox"} />
            <span>{goal.text}</span>
            <button>START</button>
          </div>
        ))}
      </div>
      <div className={styles.messageContainer}>
        {numGoalsRemaining > 0 && (
          <MoreGoalsAllowed remaining={numGoalsRemaining} />
        )}
        {numGoalsRemaining === 0 && <NoMoreGoalsAllowed />}
      </div>
    </div>
  );
};

interface MoreGoalProps {
  remaining: number;
}

const MoreGoalsAllowed: (remaining: MoreGoalProps) => JSX.Element = ({
  remaining,
}) => {
  const dispatch = useDispatch();
  const handler = (e: KeyboardEvent) => dispatch(addNewGoal());

  useEffect(() => {
    window.addEventListener("keypress", handler);
    return () => window.removeEventListener("keypress", handler);
  });

  return (
    <div className={styles.goalsAllowed}>
      <p>
        You can add {remaining} more goals for today, but it is not required.{" "}
        <i>Less is more. Focus on completing 1 task well</i>
      </p>
      <button onClick={() => dispatch(addNewGoal())}>
        Add a goal for today
      </button>
      <span className={styles.helpText}>(or press any key to add)</span>
    </div>
  );
};

const NoMoreGoalsAllowed: React.FC = () => {
  return (
    <p>
      You have a lot to accomplish today. Adding more goals may not help you
      achieve these goals. Focus on one goal at a time and complete it before
      starting or adding another one.
    </p>
  );
};

export default TodaysGoals;
