import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a personal portfolio website using React. Showcased projects, skills, and experience with modern and interactive UI/UX design. Hosted on GitHub Pages with seamless responsiveness across devices.",
      technologies: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Weather Forecasting Application",
      description: "Developed a responsive weather app for Tamil Nadu districts with features like current weather, historical data visualization, and a 7-day rainfall forecast using an RNN model. Used Python, Flask, and visualization libraries for backend and data visualization.",
      technologies: ["Python", "Flask", "Matplotlib", "Seaborn"]
    },
    {
      title: "Personal Finance Management System",
      description: "Created a Java-based application for managing income, expenses, and savings goals. Integrated features like generating reports and tracking transactions using JDBC and MySQL.",
      technologies: ["Java", "JDBC", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
