import React from "react";
import './formInput.css'
const FormInput = (props) => {
  const {
    display,
    setDisplay,
    label,
    errorMessage,
    handleChange,
    ...inputProps
  } = props;
  return (
    <div className="input-container d-flex flex-column mb-3 ">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={() => setDisplay(true)}
        onFocus={() =>
          inputProps.name === "password" && setDisplay(true)
        }
        focus={display.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
