import React from "react";
import App2 from "./app2";
import { MyContext } from "./App";

export default function app1() {
  return (
    <div>
      <p>App 1</p>
      {/* <MyContext.Consumer>
        {" "}
        {context => <p>{context.value}</p>}
      </MyContext.Consumer> */}
      <App2 />
    </div>
  );
}
