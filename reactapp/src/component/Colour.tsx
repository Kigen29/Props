import React from 'react';
import { useContext } from 'react';
import {ColourContext} from '../context/ColourContextProvider';

const Colour = () => {
  const context = useContext(ColourContext)!;

  if (!context) throw new Error("Missing <ColourContext.Provider>");
  const { colour, changeColour } = context;

  return (
    <div>
    <h1>Change Colour By clicking the Icon Below.</h1>
    <div onClick = {changeColour}>{colour}</div>
    </div>
  );
};

export default Colour;