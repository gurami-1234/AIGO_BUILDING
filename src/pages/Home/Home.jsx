import React from "react";
import ProjectCart from "components/ProjectCart/ProjectCart.jsx";
import HomeCSS from "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="our-projects">
        <div className="hr"></div>
        <p>OUR PROJECTS</p>
      </div>
      <div className="project-carts">
          <ProjectCart />
          <ProjectCart />
          <ProjectCart />
          <ProjectCart />
          <ProjectCart />
          <ProjectCart />
          <ProjectCart />
          <ProjectCart />
          <ProjectCart />
        </div>
    </div>
  );
};

export default Home;
