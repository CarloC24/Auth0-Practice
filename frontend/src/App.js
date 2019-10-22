import React, { useState, useEffect } from "react";
import "./App.css";
import App1 from "./app1";
import { MyContextProvider } from "./import";
import { Formik, Field } from "formik";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        {/* <App1 /> */}
        <Formik
          initialValues={{ name: "carlo" }}
          onSubmit={(values, actions) => {
            console.log(values, actions);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <Field
                type="text"
                name="name"
                onBlur={props.handleBlur}
                value={props.values.name}
                onSubmit={props.handleChange}
              />
              <button type="submit" disabled={props.isSubmitting}>
                Submit
              </button>
            </form>
          )}
        />
        <p>Cool</p>
      </div>
    </MyContextProvider>
  );
}

export default App;
