import React, { useEffect, useRef } from "react";
import { Input } from "semantic-ui-react";

import { useField } from "@unform/core";

export default function InputSME({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <div class="ui form">
      <div class="field">
        <div class="ui pointing below label">{label}</div>
        <input defaultValue={defaultValue} {...rest} ref={inputRef} />
      </div>
    </div>
  );
}
