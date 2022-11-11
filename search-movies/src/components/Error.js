import { Link } from "react-router-dom";
import Home from "../Home";
import React from "react";
const Error = () => {
  return (
    <section className="section">
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <Link to="/" className="btn">
        Home
      </Link>
    </section>
  );
};
export default Error;
