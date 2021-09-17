import React from "react";
import { fetchChecks } from "./api";
import Verification from "./components/Verification/Verification";
import { CheckObjectInterface } from "./interfaces/checks";
import "./styles.css";

export default function App() {
  const [listOfChecks, setListOfChecks] =
    React.useState<CheckObjectInterface[]>();

  const fetchListOfChecks = async () => {
    await fetchChecks().then((res: CheckObjectInterface[]) => {
      setListOfChecks(res);
    });
  };

  React.useEffect(() => {
    fetchListOfChecks();
  }, []);

  return (
    <div className="App">
      <Verification listOfChecks={listOfChecks || []} />
    </div>
  );
}
