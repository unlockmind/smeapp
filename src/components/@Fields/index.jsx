import React from "react";
import "semantic-ui-css/semantic.css";
import InputSME from "./contains/input.jsx";
import SelectSME from "./contains/select";
export default function FieldSME({ type, ...rest }) {
  switch (type) {
    case "text":
      return <InputSME {...rest} />;
    case "select":
      return <SelectSME {...rest} />;
    default:
      break;
  }

  return <div></div>;
}
