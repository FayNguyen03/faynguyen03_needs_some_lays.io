import './Landing.css'
import React from 'react';
import TextType from '../../ReactBitsEffect/TextType';
const Landing: React.FC = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-content">
          <TextType 
            text={["Hello World!", "My name is FAY NGUYEN", "I am actively looking for New Grad position"]}
            typingSpeed={80}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#213547", "#22577A", "#495D63"]}
            className='landing-title'
            startOnVisible = {true}
            cursorBlinkDuration = {0.8}
          />
          <div className="landing-subtitle">
            <div className='endDate'>SPRING 2026</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;