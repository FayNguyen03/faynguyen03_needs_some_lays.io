import React from "react";
import "./Info.css";

const Info: React.FC = () => {
    return (
        <div className="Info">
            <div className="iframe-wrapper">
                <iframe src="/Kinetic/sketch.html" title="Kinetic Typography" width="100%" height="400px"></iframe>
            </div>
        </div>
    );
};

export default Info;