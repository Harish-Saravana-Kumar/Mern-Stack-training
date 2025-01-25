import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-card">
        <h3>B.Tech in Artificial Intelligence & Data Science</h3>
        <h4>Sri Eshwar College of Engineering, Coimbatore</h4>
        <div className="education-details">
          <p><strong>CGPA:</strong> 7.98</p>
          <p><strong>Duration:</strong> 2023 – 2027</p>
        </div>
      </div>
      
      <div className="certifications">
        <h3>Certifications</h3>
        <ul>
          <li>Full-Stack Development Training: Focused on the MERN stack (Ongoing)</li>
          <li>Python for Data Science: Online course completion certificate</li>
        </ul>
      </div>
      
      <div className="achievements">
        <h3>Achievements</h3>
        <ul>
          <li>Published research on Depth Perception in Augmented Reality in preparation for an IEEE conference</li>
          <li>Completed LinkedIn Job Data Analysis as part of an academic assignment</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
