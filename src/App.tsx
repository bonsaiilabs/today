import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Layout, { LayoutProps } from "./components/Layout";
import { Today } from "./Today";

const App = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const header = useSelector((state: RootState) => state.header);

  const layoutProps: LayoutProps = {
    selected: header,
  };

  return (
    <Layout {...layoutProps}>
      <Today all={todos.all} />
    </Layout>
  );
};

export default App;
