import React from "react";
import { CheckObjectInterface } from "../interfaces/checks";

export const ChecksContext = React.createContext({} as any);

interface ContextProps {
  children: React.ReactNode;
}

const ChecksProvider: React.FC<ContextProps> = ({ children }) => {
  const [listOfChecks, setListOfChecks] =
    React.useState<CheckObjectInterface[]>();

  const updateListOfChecks = (data: CheckObjectInterface[]) => {
    setListOfChecks(data);
  };

  return (
    <ChecksContext.Provider value={{ updateListOfChecks, listOfChecks }}>
      {children}
    </ChecksContext.Provider>
  );
};

export default ChecksProvider;
