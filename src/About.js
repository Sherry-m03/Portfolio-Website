import React from "react";

function About() {
  return (
    <div>
      <div id="about">
        <div className="about-head">
          <h2>About Me</h2>
        </div>
        <div className="about-info">
          <div>
            <img src="woman-img.png" alt="" />
          </div>
          <div>
            <span>
              Hi, I’m Shreya, a web developer with a passion for transforming
              ideas into high-performing, visually engaging websites. I’m driven
              by a love for problem-solving and an eye for detail, ensuring each
              project I work on combines seamless functionality with an
              intuitive user experience. Through personal projects and
              continuous self-study, I’ve built a solid foundation in coding
              best practices and problem-solving. I’m passionate about creating
              meaningful, user-friendly digital experiences and look forward to
              collaborating on projects where I can apply my skills, grow as a
              developer, and make a positive impact.
            </span>
            <br></br>
            <br></br>
            <span>
              Just as I enjoy diving into different coding languages, I also
              love exploring spoken languages like Korean and Thai. My expertise
              spans a variety of technologies, including JavaScript, Node.js,
              PostgreSQL and React, and I’m constantly expanding my skills to
              stay on top of industry trends. I’m excited to bring my
              creativity, attention to detail, and enthusiasm for learning to
              every new project!
            </span>
          </div>
        </div>
      </div>
      <div className="quote1">
        <h2>"Coding with Creativity and Curiosity"</h2>
      </div>
    </div>
  );
}

export default About;
