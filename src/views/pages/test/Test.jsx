import React from "react";
import { Provider } from "react-redux";
<<<<<<< HEAD

import Test2 from "./Test2";
=======
import Arr from './arr'
>>>>>>> 57a324ef13784dbc331d48b708a8a293b4c1ef72
import store from "../../../store";

function Test() {
  console.log("Testandp")
  return (
    <>
<<<<<<< HEAD
      <Provider store={store}>
        <Test2 />
      </Provider>
=======
    <Provider store={store}>
      <Arr />
     </Provider>
>>>>>>> 57a324ef13784dbc331d48b708a8a293b4c1ef72
    </>
  );
}

export default Test;
