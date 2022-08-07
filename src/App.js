import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderForm from "./components/renderForm/RenderForm.jsx";
import RenderList from "./components/renderList/RenderList";

const App = () => {
  return (
    <div className="d-flex m-3">
      <RenderForm />
      <RenderList />
    </div>
  );
};

export default App;
