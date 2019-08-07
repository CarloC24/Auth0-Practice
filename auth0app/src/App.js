import React from "react";
import logo from "./logo.svg";
import "./App.css";
import App1 from "./app1";

export const My_Context = React.createContext({
  name: "Carlo",
  value: 0
});
// function CountProvider({ children }) {
//   return (
//     <Context.Provider value={{ count: 0, name: "Carlo" }}>
//       {children}
//     </Context.Provider>
//   );
// }

function App() {
  const { name } = React.useContext(My_Context);
  return (
    <div className="App">
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
        <p>This is the name {name}</p>
        <App1 />
      </header>
    </div>
  );
}

export default App;
