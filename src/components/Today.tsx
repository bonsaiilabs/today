import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Goals } from "../store/types";
import GoalForm from "./GoalForm";
import TodaysGoals from "./TodaysGoals";
import styles from "./Today.module.css";
import { MAX_GOALS_ALLOWED } from "../reducers/todayReducer";

export const Today: React.FC = () => {
  const goals: Goals = useSelector((state: RootState) => state.today);

  return (
    <div className={styles.todayContainer}>
      {(goals.all.length === 0 || goals.addMore) && (
        <GoalForm remaining={MAX_GOALS_ALLOWED - goals.all.length} />
      )}
      {goals.all.length > 0 && !goals.addMore && <TodaysGoals goals={goals} />}
    </div>
  );
};
