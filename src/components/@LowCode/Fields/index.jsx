import React from "react";
import "semantic-ui-css/semantic.css";
import InputSME from "./contains/input.jsx";
import SelectSME from "./contains/select";
export default function FieldSME({ Itype, ...rest }) {
  switch (Itype) {
    case "input":
      return <InputSME {...rest} />;
    case "select":
      return <SelectSME {...rest} />;
    default:
      break;
  }

  return <div></div>;
}
