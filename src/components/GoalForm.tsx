import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../actions/todayActions";
import styles from "./GoalForm.module.css";

interface GoalFormProps {
  remaining: number;
}
const GoalForm: ({ remaining }: GoalFormProps) => JSX.Element = ({
  remaining,
}) => {
  const EMPTY_GOAL: string = "";
  const [goalText, setGoalText] = useState<string>(EMPTY_GOAL);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("keypress", handleEnterKey);
    return () => window.removeEventListener("keypress", handleEnterKey);
  });

  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setGoalText(e.currentTarget.value);

  const handleEnterKey = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(addGoal({ text: goalText }));
      setGoalText(EMPTY_GOAL);
    }
  };

  return (
    <form className={styles.goalFormContainer}>
      <div className={styles.goalForm}>
        <h2>
          <span>{remaining}</span> things you want to accomplish today
        </h2>
        <input
          type={"text"}
          placeholder={"shoot for the moon!"}
          value={goalText}
          onChange={onTextChange}
          autoFocus
        />
        <p className={styles.helpText}>
          <i>Hit enter to add</i>
        </p>
      </div>
    </form>
  );
};

export default GoalForm;
