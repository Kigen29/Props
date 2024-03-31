import React from "react";
import { createContext, useState} from "react";


export const ColourContext = createContext<ColourProps | null>(null);

const ColourContextProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [colour, setColour] = useState<string>("💙");
  const changeColour = () => setColour("💗");

  return (
    <ColourContext.Provider value={{ colour, changeColour }}>
      {children}
    </ColourContext.Provider>
  );
};

export default ColourContextProvider;