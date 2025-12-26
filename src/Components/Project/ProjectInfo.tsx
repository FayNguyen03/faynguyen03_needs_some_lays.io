import React from 'react'
import ProjectIcon from './ProjectIcon'
import './ProjectInfo.css'
type ProjectInfoProps = {
    name: string,
    icons: string[],
    description: string,
    github?: string,
    link?: string,
    linkIcon?: string}

const ProjectInfo: React.FC<ProjectInfoProps> = (props:ProjectInfoProps) => {
  return (
    <div className="project-info"> 
            <br />                      
            <h3>{props.name}</h3>
            <br /><br />
            <ProjectIcon icons = {props.icons} />
        </div>
  )
}

export default ProjectInfo
