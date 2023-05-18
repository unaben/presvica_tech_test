import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderForm from "./components/RenderForm";
import RenderList from "./components/RenderList";
import { Routes, Route } from "react-router-dom";
import RenderUserDetails from "./components/RenderUserDetails/RenderUserDetails";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const [formValues, setFormValues] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  return (
    <>
      <Header />
      <div className="d-flex m-3" style={{ minHeight: "80vh" }}>
        <Routes>
          <Route
            path="/"
            element={<RenderForm setFormValues={setFormValues} />}
          />
          <Route
            path="/table"
            element={
              <RenderList formValues={formValues} setUserInfo={setUserInfo} />
            }
          />
          <Route
            path="/details"
            element={<RenderUserDetails userInfo={userInfo} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
