import React, { useState, useEffect } from "react";
import "./App.css";
import App1 from "./app1";
import { MyContextProvider } from "./import";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <App1></App1>
      </div>
    </MyContextProvider>
  );
}

export default App;
