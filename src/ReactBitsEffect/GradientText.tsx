//Source: https://reactbits.dev/
import React from 'react';
import "./GradientText.css";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  textSize: string;
};

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  colors,
  animationSpeed = 8,
  showBorder = false,
  textSize = "text-8xl"
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    fontSize: textSize
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
};

export default GradientText;
