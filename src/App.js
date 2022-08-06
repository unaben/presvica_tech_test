import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/form/FormInput";
import useInput from "./components/hooks/useInput";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderList from "./components/renderList/RenderList";

const App = () => { 
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });
 
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(true);
  

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
    <div className="d-flex m-3">
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
          <button 
          type="click" 
          onClick={() => setShow(!show)}
          >
            Continue
          </button>
        </form>
      </div>
      <RenderList show={show} />
    </div>
  );
};

export default App;
