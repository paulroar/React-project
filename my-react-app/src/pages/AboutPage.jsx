import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>Iron Project:</h1>
      <p>
      The project consists of a generic replica of a platform that hosts
      accommodation links. The project's base is a JSON file as a data
      collector where the information comes from Airbnb.com.
      </p>
      <h2>Iron Team:</h2>
      <p>
      Paulo and Andres are two aspiring developers at the beginning of 
      their journey in the tech world.
      </p>

      <p>
      With creativity as their driving force, 
      they are passionate about coding and constantly seeking opportunities
       to learn and grow. Together, they share a vision of building a 
       bright and successful future as innovative and impactful developers.
      </p>
      <h2>Find them:</h2>
      <div className="team-links">
        <div className="team-member">
          <h2>Paulo</h2>
          <a href="https://github.com/paulroar" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/paulo-prado-a2a37157/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="team-member">
          <h2>Andres</h2>
          <a href="https://github.com/andres8mtz" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    
    </div>
  );
}

export default AboutPage;
