import React from "react";
import Education from "./Education";
import Skills from "./Skills";
const About: React.FC = () =>{
    return <div className = "About">
        <Education />
        <Skills />
    </div>
};

export default About;