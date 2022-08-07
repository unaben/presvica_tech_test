import React, { useState } from "react";
import FormInput from "../form/FormInput";
import useInput from "../hooks/useInput";

const RenderForm = () => {
  const [show, setShow] = useState(true);
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [display, setDisplay] = useState(false);
  const [inputData] = useInput();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });
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
        <button type="click" onClick={() => setShow(!show)}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default RenderForm;
