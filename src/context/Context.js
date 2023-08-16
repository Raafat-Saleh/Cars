/** @format */

import { createContext, useState } from "react";

export const Context = createContext();
export function ContextProvider(props) {
  const [BlurInput, setBlurInput] = useState(false);

  const BlurSearch = () => {
    setBlurInput(!BlurInput);
  };
  return (
    <Context.Provider value={{ BlurInput, BlurSearch }}>
      {props.children}
    </Context.Provider>
  );
}
