import React, { useEffect, useRef } from "react";
import { Input } from "semantic-ui-react";

import { useField } from "@unform/core";

export default function InputSME({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return <Input defaultValue={defaultValue} {...rest} ref={inputRef} />;
}
