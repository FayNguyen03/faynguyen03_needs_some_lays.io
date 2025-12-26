import React from 'react'
import ProjectInfo from './ProjectInfo'
import './ProjectCard.css'

type ProjectCardProps = {
    image: string,
    name: string,
    icons: string[],
    description: string,
    github?: string,
    link?: string,
    linkIcon?: string,
    isVertical?: boolean,
    onCardClick?: () => void
}
const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  const handleClick = () => {
    if (props.onCardClick) {
      props.onCardClick();
    }
  };

  return (
    <div 
      className={`project-card ${props.isVertical ? 'vertical-card' : 'horizontal-card'}`}
      onClick={handleClick}
    >
        <div className="project-card-image-wrapper">
            <img src={props.image} alt={props.name + " Screen"} />
        </div>
        <ProjectInfo 
          name={props.name} 
          icons={props.icons} 
          description={props.description} 
          {...(props.github && {github:props.github})}
          {...(props.link && {link:props.link})} 
          {...(props.linkIcon && {linkIcon:props.linkIcon})}
        />
    </div>
  )
}

export default ProjectCard;
