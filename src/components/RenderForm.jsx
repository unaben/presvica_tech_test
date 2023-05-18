import React, { useState } from "react";
import FormInput from "./form/FormInput";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const RenderForm = (props) => {
  const { setFormValues } = props;

  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    password: "",
    email: "",
  });
  const [inputData] = useInput();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues((prevValue) => {
      return [...prevValue, values];
    });
    setValues({ email: "", password: "" });
    setDisplay(false);
    navigate("/table");
  };

  return (
    <div className="container p-3">
      <form
        onSubmit={handleSubmit}
        // noValidate
        className="border shadow p-3 mx-auto mt-5"
        style={{ maxWidth: "600px" }}
      >
        <h1>Login Form</h1>
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
        <button className="form-btn mb-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RenderForm;
