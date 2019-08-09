import React from "react";
import App2 from "./app2";
import MyContext from "./import";
import { Notdefined } from "./import";
export default function app1() {
  return (
    <div>
      <p>App 1 access the data</p>
      <Notdefined />
      <MyContext.Consumer>
        {context => <p>{context.name} this is app 1</p>}
      </MyContext.Consumer>
      <App2 />
    </div>
  );
}
