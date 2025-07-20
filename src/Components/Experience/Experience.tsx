import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css"
const experiences: any[] = [
    {
        id: 1,
        icon: 'fa-brands fa-salesforce',
        position: 'SWE Intern',
        duration: 'June 2025 - Present',
        company: 'Salesforce',
        detail: {
            title: 'Responsibility:',
            description: 'Work in Marketing Cloud - Automation Data Ingest team'
        }
    },
    {
        id: 2,
        icon: 'fa-solid fa-code',
        position: 'CURI Undergraduate Researcher',
        duration: 'May 2023 - May 2025',
        company: 'Saint Olaf College',
        detail: {
            title: 'Project Description:',
            description: 'I worked in a team of 2, developing algorithms for the initial goal allocation for the multi-autonomous agent settings that optimizes the resource costs and equally distributes the workload among the available agents. ',
            link: 'https://journals.flvc.org/FLAIRS/article/view/135601',
            linkDescription: 'Publication'
        }
    },
    {
        id: 3,
        icon: 'fa-solid fa-chalkboard',
        position: 'Computer Science Lead Teaching Assistant',
        duration: 'Feb 2023 - Present',
        company: 'MSCS Department, Saint Olaf College',
    },
    {
        id: 4,
        icon: 'fa-solid fa-users',
        position: 'Technology Consulting Assistant',
        duration: 'Sep 2022 - Present',
        company: 'IT Department, Saint Olaf College',
    }
]

const Experience:React.FC = () =>{
    return(
        <div className="experience">
            <h2>Experience</h2>
            {
                experiences.map((experience:{id: number, icon: string, position:string, duration: string, company: string, detail?: any}) =>{
                    return <ExperienceCard  key={experience.id}
                                            icon={experience.icon} 
                                            position={experience.position} 
                                            company={experience.company} 
                                            duration={experience.duration} 
                                            {...(experience.detail && { detail: experience.detail})} />
                })
            }
        </div>
    )
    
}

export default Experience;