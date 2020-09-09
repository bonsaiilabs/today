import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Layout from "./components/Layout";
import { Today } from "./Today";

const App = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <Layout>
      <Today all={todos.all} />
    </Layout>
  );
};

export default App;
