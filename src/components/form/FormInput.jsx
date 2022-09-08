import React from "react";
import "./formInput.css";
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
    <div className="mb-3 ">
      <label htmlFor="password" className="form-label">
        {label}
      </label>
      <input
        {...inputProps}
        type="text"
        onChange={handleChange}
        onBlur={() => setDisplay(true)}
        onFocus={() => inputProps.name === "password" && setDisplay(true)}
        focus={display.toString()}
        className="form-control mb-3"
      />     
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
