import React from "react";
import styles from "./Layout.module.css";

// todo (h2): Figure out the return type of children
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header selectedHeader={headerTitles[0]} />
      <div id={"main_content"}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;

const headerTitles = ["Today", "Notes"];

interface HeaderProps {
  selectedHeader: string;
}

const Header: ({ selectedHeader }: HeaderProps) => JSX.Element = ({
  selectedHeader,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      {headerTitles.map((header, key) => (
        <a
          key={key}
          href={"#"}
          className={header === selectedHeader ? styles.selectedHeader : "none"}
        >
          {header}
        </a>
      ))}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href={"/"}>How it works?</a>
      </div>
    </footer>
  );
};
