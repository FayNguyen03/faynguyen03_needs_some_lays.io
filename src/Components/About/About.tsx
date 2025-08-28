import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Coursework from "./Coursework";
import Info from "./Info";
import "./About.css";

const About: React.FC = () => {
    return (
        <div className="About">
            <div className="AboutSection about-section">
                <h2>About Me</h2>
                <Info />
            </div>
            <div className="AboutSection education-section">
                <h2>Education</h2>
                <Education />
            </div>
            
            <div className="AboutSection skills-section">
                <h2>Technical Skills</h2>
                <Skills />
            </div>
            
            <div className="AboutSection coursework-section">
                <h2>Relevant Coursework</h2>
                <Coursework />
            </div>
        </div>
    );
};

export default About;