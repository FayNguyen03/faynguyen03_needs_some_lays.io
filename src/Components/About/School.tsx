import React from "react";

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
    return <div className="School" style={{ backgroundImage: `url(${props.imgURL})` }}>
        <h3 className="SchoolName"><a href={props.url}>{props.schoolName}</a></h3>
        <p className="SchoolLocation">{props.location}</p>

    </div>
};

export default School;