import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header style={{ position: "sticky", top: 0 }}>
      <div
        className="d-flex justify-content-center"
        style={{
          fontFamily: "monospace",
          height: "4rem",
          alignItems: "self-end",
        }}
      >
        <img src="/image/tech-logo.png" alt="tech-img" />
        <div>
          <p>Preservica Tech Test</p>
        </div>
      </div>
      <ul className="link">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/table">
          <li>Table</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
