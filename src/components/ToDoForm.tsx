import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todayActions";
import styles from "./ToDoForm.module.css";

const ToDoForm: React.FC = () => {
  const EMPTY_TODO: string = "";
  const [todoText, setTodoText] = useState<string>(EMPTY_TODO);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("keypress", handleEnterKey);
    return () => window.removeEventListener("keypress", handleEnterKey);
  });

  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setTodoText(e.currentTarget.value);

  const handleEnterKey = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(addTodo({ text: todoText }));
      setTodoText(EMPTY_TODO);
    }
  };

  return (
    <form className={styles.todoFormContainer}>
      <div className={styles.todoForm}>
        <h2>
          <span>3</span> things you want to accomplish today
        </h2>
        <input
          type={"text"}
          placeholder={"shoot for the moon!"}
          value={todoText}
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

export default ToDoForm;
