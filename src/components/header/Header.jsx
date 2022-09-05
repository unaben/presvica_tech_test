import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import img from "../image/tech-logo.png";
const Header = () => {
  return (
    <header>
      <div
        className="d-flex justify-content-center"
        style={{
          fontFamily: "monospace",
          height: "4rem",
          alignItems: "self-end",
        }}
      >
        <img
          src={img}
          alt="tech-img"
          style={{ height: "60px", maxWidth: "100px", padding: "10px" }}
        />
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
