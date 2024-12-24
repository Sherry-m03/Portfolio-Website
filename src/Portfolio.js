import React from "react";
import ProjectPortfolio from "./ProjectPortfolio";

function Portfolio() {
  const projects = [
    {
      projImgName: "NN-project.png",
      projLink: "/NovelNote",
      classname: "project-big",
    },
    {
      projImgName: "BIC-project.png",
      projLink: "/BICulture",
      classname: "project-big",
    },
    {
      projImgName: "WorldLit-project.png",
      projLink: "/WorldLit",
      classname: "project-big",
    },
    {
      projImgName: "CineLog-project.png",
      projLink: "/CineLog",
      classname: "project-big",
    },
    {
      projImgName: "QT-project.png",
      projLink: "/TodoList",
      classname: "project-big",
    },
    {
      projImgName: "PlanPack-project.png",
      projLink: "/PlanPack",
      classname: "project-big",
    },

    {
      projImgName: "Eat 'n' Split-project.png",
      projLink: "/EatnSplit",
      classname: "project-small",
    },

    {
      projImgName: "DiceGame-project.png",
      projLink: "/DiceGame",
      classname: "project-small",
    },
    {
      projImgName: "SimonGame-project.png",
      projLink: "/SimonGame",
      classname: "project-small",
    },
  ];
  return (
    <div id="portfolio">
      <div className="portfolio">
        <h2>Portfolio</h2>
      </div>
      <div className="view">
        {projects.map((prj) => (
          <ProjectPortfolio
            projImgName={prj.projImgName}
            projLink={prj.projLink}
            projClassName={prj.classname}
          />
        ))}
      </div>
    </div>
  );
}

// Add key={name} after prfObj={prj}, and update projects array by including the name of every project
export default Portfolio;
