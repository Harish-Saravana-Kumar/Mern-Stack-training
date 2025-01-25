import React from 'react';
import '../styles/Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/luffy.jpeg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <h1>Hi, I'm Harish S</h1>
          <h2>Full Stack Developer</h2>
          <p>Aspiring Full Stack Developer with expertise in MERN stack technologies</p>
          <div className="social-links">
            <a href="https://github.com/Harish-Saravana-Kumar" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/harishs-fullstackdeveloper/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:malarharish007@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="profile-pic-container">
          <div className="profile-pic-wrapper">
            <img src={profilePic} alt="Harish S" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
