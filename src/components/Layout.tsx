import React, { ReactElement, ReactNode } from "react";

// todo (h2): Figure out the return type of children
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

const Header: React.FC = () => {
  return <div>I am Header</div>;
};

const Footer: React.FC = () => {
  return <div>I am Footer</div>;
};
