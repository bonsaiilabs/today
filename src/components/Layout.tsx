import React from "react";
import styles from "./Layout.module.css";
import Header from "./Header";

// todo (h2): figure out type of children
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div id={"main_content"}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href={"/"}>How it works?</a>
      </div>
    </footer>
  );
};
