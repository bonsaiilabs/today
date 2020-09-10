import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "./Header.module.css";
import { Headers } from "../store/types";
import { changeHeader } from "../actions/headerActions";
import React from "react";

const Header: () => JSX.Element = () => {
  const selectedHeader = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      {Headers.map((header, key) => (
        <button
          key={key}
          className={header === selectedHeader ? styles.selectedHeader : "none"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeHeader(header));
          }}
        >
          {header}
        </button>
      ))}
    </header>
  );
};
export default Header;
