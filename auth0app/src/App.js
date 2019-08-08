import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import App1 from "./app1";
import myContext from "./import";
// console.log(myContext);

export let poop = "poop";
function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <myContext.Provider value={{ count, name: "Carlo :poop:", setCount }}>
      {children}
    </myContext.Provider>
  );
}
function AnotherComponent() {
  return (
    <div>
      <p>This is a another component</p>
      <myContext.Consumer>
        {context => <p>{context.name}</p>}
      </myContext.Consumer>
    </div>
  );
}

function App() {
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
          <App1 />
        </header>
      </ContextProvider>
    </div>
  );
}

export default App;
