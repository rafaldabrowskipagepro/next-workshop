import { Field } from "formik";
import React from "react";

const LabeledInput: React.VFC<{ label: string; name: string }> = ({
  name,
  label,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} {...{ name }} />
    </>
  );
};

export default LabeledInput;
