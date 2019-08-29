import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import App1 from "./app1";
import myContext from "./import";
import Img from "./img";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <myContext.Provider value={{ count, name: "Carlo :poop:", setCount }}>
      {children}
    </myContext.Provider>
  );
}

function App() {
  useEffect(() => {
    async function postData() {
      const res = await axios.get("http://localhost:5000");
      console.log(res);
    }
    postData();
  }, []);
  return (
    <div className="App">
      <ContextProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <AnotherComponent /> */}
          {/* <App1 /> */}
          <Img />
        </header>
      </ContextProvider>
    </div>
  );
}

export default App;
