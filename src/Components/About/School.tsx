import React from "react";
import "./School.css";

type SchoolProps ={
    schoolName: string;
    location: string;
    imgURL: string;
    url: string;
    majors: string[];
    gpa: string;
    duration: string;
}

const School: React.FC<SchoolProps> = (props: SchoolProps) =>{
    return <div className="School">
        <div className="SchoolInfo">
            <h3 className="SchoolName"><a href={props.url}>{props.schoolName}</a></h3>
            <p className="SchoolLocation">{props.location}</p>
            <p className="SchoolMajors">Major(s): {props.majors.join(", ")}</p>
            <p className="SchoolGPA">GPA: {props.gpa}</p>
            <p className="SchoolDuration">{props.duration}</p>
        </div>
        <div className="SchoolImage">
            <img src={props.imgURL} alt={props.schoolName}/>
        </div>
    </div>
};

export default School;