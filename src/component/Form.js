import React from "react";
import { FormStyle, Button, Input } from "./styles/Form.styled";
function Form({ placeholder, type }) {
  return (
    <FormStyle>
      <Input
        className="form-field"
        type={type ? type : "text"}
        placeholder={placeholder}
      />
      <Button>ثبت</Button>
    </FormStyle>
  );
}

export default Form;
