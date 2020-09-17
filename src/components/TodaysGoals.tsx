import React, { useEffect, useState } from "react";
import { Goal, Goals } from "../store/types";
import styles from "./TodaysGoals.module.css";
import { MAX_GOALS_ALLOWED } from "../reducers/todayReducer";
import { useDispatch } from "react-redux";
import {
  accomplishGoal,
  addNewGoal,
  deleteGoal,
} from "../actions/todayActions";
import { Trash2 } from "react-feather";

interface TodaysGoalsProps {
  goals: Goals;
}

interface DeleteWarning {
  goal: Goal | null;
  showDialog: boolean;
}

const DeleteWarningInitialState: DeleteWarning = {
  goal: null,
  showDialog: false,
};

const TodaysGoals: ({ goals }: TodaysGoalsProps) => JSX.Element = ({
  goals,
}) => {
  const dispatch = useDispatch();
  const numGoalsRemaining = MAX_GOALS_ALLOWED - goals.all.length;
  const [deleteWarning, setDeleteWarningDialog] = useState<DeleteWarning>(
    DeleteWarningInitialState
  );

  const handleDelete = (goal: Goal) => {
    setDeleteWarningDialog(DeleteWarningInitialState);
    dispatch(deleteGoal(goal));
  };

  return (
    <div className={styles.goalsContainer}>
      <div>
        {goals.all.map((goal, key) => (
          <div key={key} className={styles.goalRow}>
            <input
              type={"checkbox"}
              onClick={() => dispatch(accomplishGoal(goal))}
            />
            <span>{goal.text}</span>
            <button>START</button>
            <div
              className={styles.delete}
              onClick={() => setDeleteWarningDialog({ goal, showDialog: true })}
            >
              <Trash2 className={styles.deleteIcon} size={20} />
            </div>
          </div>
        ))}
        {deleteWarning.showDialog && (
          <Dialog
            onCancel={() => setDeleteWarningDialog(DeleteWarningInitialState)}
            onConfirm={() => handleDelete(deleteWarning.goal as Goal)}
            message={
              "This will delete the goal. This action is irreversible. Are you sure?"
            }
          />
        )}
        <div className={styles.messageContainer}>
          {numGoalsRemaining > 0 && (
            <MoreGoalsAllowed remaining={numGoalsRemaining} />
          )}
          {numGoalsRemaining === 0 && <NoMoreGoalsAllowed />}
        </div>
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
      <div>
        <button onClick={() => dispatch(addNewGoal())}>+ Add a priority</button>
      </div>
      <div className={styles.helpText}>or press any key to add</div>

      <p>
        You can add {remaining} more goals for today, but it is not required.{" "}
        <i>Less is more. Focus on completing 1 task well</i>
      </p>
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

interface DialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

const Dialog: (props: DialogProps) => JSX.Element = ({
  message,
  onCancel,
  onConfirm,
}: DialogProps) => {
  return (
    <div className={styles.dialogContainer}>
      <dialog open>
        <form method="dialog">
          <p>{message}</p>
          <div className={styles.dialogActions}>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onConfirm}>Confirm</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default TodaysGoals;
