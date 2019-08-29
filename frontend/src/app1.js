import React, { useContext } from "react";
import App2 from "./app2";
import MyContext from "./import";
export default function app1() {
  return (
    <div>
      <p>App 1 access the data</p>
      {/* <App2 /> */}
    </div>
  );
}
