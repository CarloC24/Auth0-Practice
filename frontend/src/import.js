import React, { useState } from "react";
const MyContext = React.createContext();

export function MyContextProvider(props) {
  const [state, updateState] = useState({ name: "carlo" });
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
}

export default MyContext;
