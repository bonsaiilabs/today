import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Layout from "./components/Layout";
import { Today } from "./components/Today";
import Notes from "./components/Notes";
import { NOTES_HEADER, GOAL_HEADER } from "./store/types";

const App = () => {
  const selectedHeader = useSelector((state: RootState) => state.header);
  return (
    <Layout>
      {selectedHeader === GOAL_HEADER && <Today />}
      {selectedHeader === NOTES_HEADER && <Notes />}
    </Layout>
  );
};

export default App;
