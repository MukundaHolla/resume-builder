import React from "react";

import "./Projects.scss";
import ScrollAnimation from "react-animate-on-scroll";
import project1 from "assets/img/projectImages/project1.png";
import aboutMe_image from "assets/img/aboutMe_image.jpg";

const projects = [
  {
    title: "Sears Parts Direct",
    secondarytTitle: "E-Commerce Web Application",
    description: [
      "At Sears PartsDirect, you can find millions of replacement parts for most major brands of appliances, outdoor power equipment, water heaters and softeners, and more, no matter where you bought the product.",
      "It's goal is to help new and experienced DIYers quickly find and order the right part, from any device. It involves Cart, purchasing, Account, Offer, rating and tracking order details."
    ],
    skillSet:
      "React.js/ Redux.js, UI/ UX, Node.js, Express.js, Apollo GraphQL, DynamoDB, Jest, Enzyme, Postman, SoupUI ",
    imageTemplate: project1
  }
];
const colorClass = [
  "label-default",
  "label-primary",
  "label-info",
  "label-danger",
  "label-success",
  "label-warning"
];
class Projects extends React.Component {
  render() {
    return (
      <div id="projects-section">
        <div className="row projects-container">
          <div className="col-12 projects-heading">
            <ScrollAnimation
              animateOnce={true}
              offset={0}
              delay={1}
              animateIn="tada"
              initiallyVisible={true}
            >
              <h1>PROJECTS</h1>
            </ScrollAnimation>
          </div>
          <div className="col-12 projects-list">
            {projects.map(project => {
              let projectDiv = (
                <div className="row no-gutters project-details">
                  <div className="col-6">
                    <h1>{project.title}</h1>
                    <h2>{project.secondarytTitle}</h2>
                    {project.description.map(desc => (
                      <p>{desc}</p>
                    ))}
                    <div className="skillSet-list">
                      {project.skillSet.split(",").map(skill => {
                        let rand =
                          colorClass[
                            Math.floor(Math.random() * colorClass.length)
                          ];
                        return (
                          <div>
                            <span className={rand}>{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-6">
                    <img src={project.imageTemplate} alt="Sears Parts Direct" />
                  </div>
                  <br />
                  <hr className="project-dividerLine"/>
                  <br />
                </div>
              );
              return projectDiv;
            })}
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;
