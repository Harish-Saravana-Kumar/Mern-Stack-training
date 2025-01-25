import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am an aspiring Full Stack Developer currently pursuing B.Tech in AI & DS at Sri Eshwar College of Engineering, Coimbatore. 
            With a strong foundation in MERN stack technologies and a passion for creating dynamic, responsive web applications, 
            I am eager to contribute to innovative projects in a fast-paced tech environment.
          </p>
          <div className="contact-info">
            <p><strong>Address:</strong> 65/1-5, Amman Avenue, Poonga Nagar, Veerapandi, Coimbatore, Tamil Nadu, PIN: 641019</p>
            <p><strong>Email:</strong> malarharish007@gmail.com</p>
            <p><strong>Phone:</strong> +91 93453006280</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
