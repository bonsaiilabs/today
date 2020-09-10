import React from "react";
import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

// todo (h2): figure out type of children
const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
