import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href={"/"}>How it works?</a>
      </div>
    </footer>
  );
};
export default Footer;
