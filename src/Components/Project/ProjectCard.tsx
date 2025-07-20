import React, { useState } from 'react'
import ProjectInfo from './ProjectInfo'

type ProjectCardProps = {
    image: string,
    name: string,
    icons: string[],
    description: string,
    github?: string,
    link?: string,
    linkIcon?:string
}
const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {

  return (
    <div className={`project-card`}>
        <div className="project-card-image-wrapper">
            <img src={props.image} alt={props.name + " Screen"} />
        </div>
        <ProjectInfo name={props.name} icons={props.icons} description={props.description} {...(props.github && {github:props.github})}
        {...(props.link && {link:props.link})} {...(props.linkIcon && {linkIcon:props.linkIcon})}/>
    </div>
  )
}

export default ProjectCard;
