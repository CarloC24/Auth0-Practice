import React, { Fragment } from "react";
import MyContext from "./import";

export default function app2() {
  return (
    <div>
      <p>App 2</p>
      <MyContext.Consumer>
        {context => (
          <>
            <p>{context.count}</p>
            <button onClick={() => context.setCount(context.count + 1)}>
              {" "}
              increment count
            </button>
          </>
        )}
      </MyContext.Consumer>
    </div>
  );
}
