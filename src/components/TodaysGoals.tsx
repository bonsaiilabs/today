import React from "react";
import { Goals } from "../store/types";
import styles from "./TodaysGoals.module.css";

interface TodaysGoalsProps {
  goals: Goals;
}

const MAX_GOALS_ALLOWED = 3;

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
      {numGoalsRemaining > 0 && (
        <MoreGoalsAllowed remaining={numGoalsRemaining} />
      )}
    </div>
  );
};

interface MoreGoalProps {
  remaining: number;
}
const MoreGoalsAllowed: (remaining: MoreGoalProps) => JSX.Element = ({
  remaining,
}) => {
  return (
    <div className={styles.messageContainer}>
      <p>
        You can add {remaining} more goals for today, but it is not required.{" "}
        <i>Less is more. Focus on completing 1 task well</i>
      </p>
      <button>Add a goal for today</button>
    </div>
  );
};

export default TodaysGoals;
