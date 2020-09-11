import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Goals } from "../store/types";
import GoalForm from "./GoalForm";
import TodaysGoals from "./TodaysGoals";
import styles from "./Today.module.css";

export const Today: React.FC = () => {
  const goals: Goals = useSelector((state: RootState) => state.today);

  return (
    <div className={styles.todayContainer}>
      {goals.all.length === 0 && <GoalForm />}
      {goals.all.length > 0 && <TodaysGoals goals={goals} />}
    </div>
  );
};
