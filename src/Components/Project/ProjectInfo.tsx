import React from 'react'
import ProjectIcon from './ProjectIcon'

type ProjectInfoProps = {
    name: string,
    icons: string[],
    description: string,
    github?: string,
    link?: string,
    linkIcon?: string
}

const ProjectInfo: React.FC<ProjectInfoProps> = (props:ProjectInfoProps) => {
  return (
    <div className="project-info"> 
            <br />                      
            <h3>{props.name}</h3>
            <br /><br />
            <ProjectIcon icons = {props.icons} />
            <br /><br />
            <ul>
                <li>{props.description}</li>                        
            </ul>
            <br /><br />
            {props.github && <a href={props.github}><i className="devicon-github-original" id = "GitHub Repository"></i></a>}
            {props.link && props.linkIcon && <a href={props.link}><i className = {props.linkIcon} id = "Other Link"></i></a>}
        </div>
  )
}

export default ProjectInfo
