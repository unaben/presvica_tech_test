import React, { useState } from "react";
import FormInput from "../form/FormInput";
import useInput from "../hooks/useInput";

const RenderForm = (props) => {
  const { setFormValues, formValues } = props;
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    password: "",
    email: "",
  });
console.log('State:', formValues)
  const [inputData] = useInput();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues([...formValues, values]);
    setValues({ email: "", password: "" });
    setDisplay(false);
  };

  return (
    <div style={{ maxWidth: "400px" }} className="p-3">
      <form onSubmit={handleSubmit} className="border shadow p-3">
        <h1>Register</h1>
        {inputData.map((data, index) => {
          return (
            <FormInput
              key={index}
              {...data}
              value={values[data.name]}
              handleChange={handleChange}
              display={display}
              setDisplay={setDisplay}
            />
          );
        })}
        <button className="form-btn" type="click">Submit</button>
      </form>
    </div>
  );
};

export default RenderForm;
