import React from "react";
import logo from "./logo.svg";
import "./App.css";
import App1 from "./app1";

export const MyContext = React.createContext();
function ContextProvider({ children }) {
  return (
    <MyContext.Provider value={{ count: 0, name: "Carlo" }}>
      {children}
    </MyContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <MyContext.Consumer>
          {context => <p>rendering from app {context.count}</p>}
        </MyContext.Consumer>
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
          <App1 />
        </header>
      </ContextProvider>
    </div>
  );
}

export default App;
