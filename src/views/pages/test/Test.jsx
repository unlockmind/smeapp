import React from "react";
import { Provider } from "react-redux";

import Test2 from "./Test2";
import store from "../../../store";

function Test() {
  return (
    <>
      <Provider store={store}>
        <Test2 />
      </Provider>
    </>
  );
}

export default Test;
