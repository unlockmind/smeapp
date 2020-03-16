import React from "react";
import { Provider } from "react-redux";
import Arr from './arr'
import store from "../../../store";

function Test() {
  console.log("Testandp")
  return (
    <>
    <Provider store={store}>
      <Arr />
     </Provider>
    </>
  );
}

export default Test;
