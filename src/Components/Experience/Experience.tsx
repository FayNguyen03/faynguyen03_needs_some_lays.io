import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css"
const experiences: any[] = [
    {
        id: 0,
        icon: 'fa-solid fa-atom',
        position: 'Incoming Data Management Intern',
        duration: 'Jan 2026',
        company: 'IUPAC',
        detail: {
            description: ''
        },
        icons: ['devicon-java-plain colored', 'devicdevicon-eclipse-plain']
    },
    {
        id: 1,
        icon: 'fa-brands fa-salesforce',
        position: 'SWE Intern',
        duration: 'June 2025 - Aug 2025',
        company: 'Salesforce',
        detail: {
            description: 'Built an end-to-end API route that enabled real-time recommendations and improved database system performance.'
        },
        icons: ['devicon-csharp-plain', 'devicon-dotnet-plain', 'devicon-visualstudio-plain', 'devicon-microsoftsqlserver-plain-wordmark', 'evicon-postman-plain colored', 'devicon-javascript-plain colored']
    },
    {
        id: 2,
        icon: 'fa-solid fa-code',
        position: 'CURI Undergraduate Researcher - Autonomous Agents',
        duration: 'May 2023 - May 2024',
        company: 'Saint Olaf College',
        detail: {
            description: 'Developed algorithms for the initial goal allocation for the multi-autonomous agent settings that optimizes the resource costs and equally distributes the workload among the available agents',
            link: 'https://journals.flvc.org/FLAIRS/article/view/135601',
            linkDescription: 'Publication'
        },
        icons: ['devicon-python-plain-wordmark']

    },
    {
        id: 4,
        icon: 'fa-solid fa-chalkboard',
        position: 'Computer Science Lead TA',
        duration: 'Feb 2023 - Dec 2025',
        company: 'MSCS Department, Saint Olaf College',
        detail: {
            description: 'Conducted training sessions at the beginning of each semester for the TAs; Provided comprehensive guidance on grading policies, effective communication strategies with students',
        },
        icons: []
    }
]

const Experience:React.FC = () =>{
    return(
        <div className="experience">
            {
                experiences.map((experience:{id: number, icon: string, position:string, duration: string, company: string, detail?: any, icons: string[]}) =>{
                    return <ExperienceCard  key={experience.id}
                                            icon={experience.icon} 
                                            position={experience.position} 
                                            company={experience.company} 
                                            duration={experience.duration} 
                                            {...(experience.detail && { detail: experience.detail})}
                                            {...(experience.icons && { icons: experience.icons})} />
                })
            }
        </div>
    )
    
}

export default Experience;