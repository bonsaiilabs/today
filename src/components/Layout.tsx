import React from "react";
import styles from "./Layout.module.css";
import { Header, Headers } from "../store/types";

export interface LayoutProps {
  selected: Header;
}

const Layout: ({ selected }: LayoutProps) => JSX.Element = ({
  selected,
}: LayoutProps) => {
  return (
    <div>
      <AppHeader selectedHeader={selected} />
      <div id={"main_content"}>Coming Soon</div>
      <Footer />
    </div>
  );
};
export default Layout;

interface HeaderProps {
  selectedHeader: Header;
}

const AppHeader: ({ selectedHeader }: HeaderProps) => JSX.Element = ({
  selectedHeader,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      {Headers.map((header, key) => (
        <a
          key={key}
          href={"/"}
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
