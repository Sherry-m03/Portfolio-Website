import React from "react";
import { Link } from "react-router-dom";

function ProjectPortfolio({ projImgName, projLink, projClassName }) {
  return (
    <div className={projClassName}>
      <Link to={projLink}>
        <img src={projImgName} alt=""></img>
      </Link>
    </div>
  );
}

export default ProjectPortfolio;
