import React from "react";
import App2 from "./app2";
import { My_Context } from "./App";

const context = React.useContext(My_Context);
console.log(context, "cool");
export default function app1() {
  return (
    <div>
      <p>App 1</p>
      <p>This should render the count</p>
      <App2 />
    </div>
  );
}
