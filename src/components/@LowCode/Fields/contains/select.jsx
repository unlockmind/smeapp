import React, { useRef, useEffect } from "react";
import ReactSelect from "react-select";
import { useField } from "@unform/core";

const SelectSME = ({ name, label, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "state.value",
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        } else {
          if (!ref.state.value) {
            return "";
          }
          return ref.state.value.value;
        }
      }
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <div class="ui form">
      <div class="field">
        <div class="ui pointing below label">{label}</div>
        <ReactSelect
          defaultValue={defaultValue}
          ref={selectRef}
          classNamePrefix="react-select"
          {...rest}
        />
      </div>
    </div>
  );
};
export default SelectSME;

/**
 *
 * Ansiedade é muito ruim,  a gente perde o controle dos nossos sentimentos, nossa mente cria coisa para ficar mal,
 *  tomando como verdade absoluta o que não é real e nos lembrando de coisas que não devia.
 * Tudo isso acontece ao mesmo tempo combinado com diversos pensamentos negativos.
 */
