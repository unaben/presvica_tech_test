import React, { useState } from "react";
import FormInput from "../form/FormInput";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const RenderForm = (props) => {
  const { setFormValues, formValues } = props;
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    password: "",
    email: "",
  });
  const [inputData] = useInput();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues([...formValues, values]);
    setValues({ email: "", password: "" });
    setDisplay(false);
    navigate("/table");
  };

  return (
    <div
      className="p-3"
      style={{
        margin: "20px auto",
      }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="border shadow p-3"
        style={{
          width: "800px",
          height: "500px",
        }}
      >
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
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RenderForm;
