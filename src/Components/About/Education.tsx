import React from "react";
import School from "./School";
const schools: any[] = [{
    schoolName: "St.Olaf College",
    location: "Northfield, MN",
    imgURL: "StOlaf.png",
    url: "https://wp.stolaf.edu/",
    majors: ['Computer Science', 'Math', 'Statistics and Data Science'],
    gpa: '3.99/4.0',
    duration: '2022 - 2026'
},
   {schoolName: "Trinity College Dublin - School of Computer Science and Statistics",
    location: "Dublin, Ireland",
    imgURL: "Trinity.png",
    url: "http://tcd.ie/scss/",
    majors: ['Computer Science'],
    gpa: 'First Class Honours',
    duration: 'Jan - May 2025'
} 
]

const Education: React.FC = () =>{
    return <div className = "Education">
        {
            schools.map((school: {schoolName: string, location: string, imgURL: string, url: string, majors: string[], gpa: string, duration: string}) =>{
                return <School schoolName={school.schoolName} 
                            location={school.location} 
                            imgURL={school.imgURL} 
                            url={school.url} 
                            majors={school.majors}
                            gpa={school.gpa}
                            duration={school.duration}/>
            })
        }
    </div>
};

export default Education;