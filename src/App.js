import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderForm from "./components/renderForm/RenderForm.jsx";
import RenderList from "./components/renderList/RenderList";

const App = () => {
  const [formValues, setFormValues] = useState([]);
  return (
    <div className="d-flex m-3">
      <RenderForm setFormValues={setFormValues} formValues={formValues}/>
      <RenderList formValues={formValues} />
    </div>
  );
};

export default App;
