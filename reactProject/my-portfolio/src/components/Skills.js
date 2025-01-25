import React from 'react';
import '../styles/Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend' },
    { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
    { name: 'MySQL', icon: <SiMysql />, category: 'Database' },
    { name: 'Git', icon: <FaGitAlt />, category: 'Tools' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {['Frontend', 'Backend', 'Database', 'Tools'].map(category => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div key={skill.name} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
