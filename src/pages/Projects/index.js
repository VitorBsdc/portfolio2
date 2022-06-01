import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";

const Projects = () => {
  return (
    <>
      <NavBar />
      <h1>Page Projects - Test</h1>
      <Link to="/">retornar a página inicial</Link>
    </>
  );
};

export default Projects;
