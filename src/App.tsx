import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Layout from "./components/Layout";
import { Today } from "./components/Today";
import Notes from "./components/Notes";
import { NOTES, TODAY } from "./store/types";

const App = () => {
  const selectedHeader = useSelector((state: RootState) => state.header);
  return (
    <Layout>
      {selectedHeader === TODAY && <Today />}
      {selectedHeader === NOTES && <Notes />}
    </Layout>
  );
};

export default App;
