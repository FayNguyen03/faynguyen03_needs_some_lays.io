import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css"
import { desc } from "motion/react-client";
const experiences: any[] = [
    {
        id: 1,
        icon: 'fa-brands fa-salesforce',
        position: 'SWE Intern',
        duration: 'June 2025 - Aug 2025',
        company: 'Salesforce',
        detail: {
            description: 'Built an API route in C# and .NET that enabled real-time recommendations and improved system performance; Implemented feature flags, telemetry, and localization; Collaborated on Agile and CI/CD workflows to ensure reliable and continuous delivery'
        }
    },
    {
        id: 2,
        icon: 'fa-solid fa-code',
        position: 'CURI Undergraduate Researcher',
        duration: 'May 2023 - May 2024',
        company: 'Saint Olaf College',
        detail: {
            description: 'Developed algorithms for the initial goal allocation for the multi-autonomous agent settings that optimizes the resource costs and equally distributes the workload among the available agents',
            link: 'https://journals.flvc.org/FLAIRS/article/view/135601',
            linkDescription: 'Publication'
        }
    },
    {
        id: 3,
        icon: 'fa-solid fa-chalkboard',
        position: 'Computer Science Lead TA',
        duration: 'Feb 2023 - Present',
        company: 'MSCS Department, Saint Olaf College',
        detail: {
            description: 'Conducted training sessions at the beginning of each semester for the CS TAs; Provided comprehensive guidance on grading policies, effective communication strategies with students; Implemented best practices in the Computer Science community',
        }
    },
    {
        id: 4,
        icon: 'fa-solid fa-users',
        position: 'Technology Consulting Assistant',
        duration: 'Sep 2022 - Present',
        company: 'IT Department, Saint Olaf College',
        detail: {
            description: 'Provided direct and virtual support for about 4,000 students, professors, and staff on the St.Olaf College campus to address various technical issues, from printing to classroom functionality; Utilized the TeamDynamix platform to manage the workflow of solving technical problems and communicate with online clients through Tawk.to'
        }
    }
]

const Experience:React.FC = () =>{
    return(
        <div className="experience">
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