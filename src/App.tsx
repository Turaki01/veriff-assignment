import React from "react";
import { fetchChecks, submitCheckResults } from "./api";
import Button from "./components/Button/Button";
import Verification from "./components/Verification/Verification";
import { ChecksContext } from "./context/ChecksContext";
import useEventListener from "./hooks/use-event-listener";
import { CheckObjectInterface } from "./interfaces/checks";
import "./styles.css";
import {
  key_event_listner,
  transform_array,
  update_Active_index,
} from "./utils/array-manipulation";

export default function App() {
  const { updateListOfChecks, listOfChecks } = React.useContext(ChecksContext);

  const fetchListOfChecks = async () => {
    await fetchChecks()
      .then((res: CheckObjectInterface[]) => {
        updateListOfChecks(transform_array(res));
      })
      .catch((err) => console.error(err));
  };

  const onCheckSelect = (selection: string, selectedCheckIndex: number) => {
    const newArray: CheckObjectInterface[] = [];

    listOfChecks.forEach((item: CheckObjectInterface, index: number) => {
      if (index === selectedCheckIndex) {
        item.checked_value = selection;
        newArray.push(item);
      } else {
        newArray.push(item);
      }
    });

    updateListOfChecks(update_Active_index(newArray, selectedCheckIndex));
  };

  const onHandleSubmit = async () => {
    await submitCheckResults(listOfChecks).then((res) => {
      console.log(res);
    });
  };

  const handler = React.useCallback((e, listOfChecks) => {
    updateListOfChecks([]);
    const { array } = key_event_listner(e.key, listOfChecks);
    updateListOfChecks(array);
    // eslint-disable-next-line
  }, []);

  useEventListener("keydown", (e: Event) => handler(e, listOfChecks));

  React.useEffect(() => {
    fetchListOfChecks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {listOfChecks?.length > 0 ? (
        <Verification
          listOfChecks={listOfChecks}
          onHandleSubmit={onHandleSubmit}
          onCheckSelect={onCheckSelect}
        />
      ) : (
        <div className="empty-state-div ">
          <h3>Nothing to see here</h3>

          <Button onClick={fetchListOfChecks}>Fetch Data</Button>
        </div>
      )}
    </div>
  );
}
