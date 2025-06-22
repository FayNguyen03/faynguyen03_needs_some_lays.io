import React from "react";
import Detail from "./Detail"
import "./ExperienceCard.css"
type ExperienceCardProps = {
    icon: string;
    position: string;
    duration: string;
    company: string;
    detail?: {
        title: string;
        description: string;
        link?: string;
        linkDescription?: string;
    }
}

const ExperienceCard:React.FC<ExperienceCardProps> = (props: ExperienceCardProps) =>{
    return(
        <div className="experienceCard">
            <i className={props.icon}></i>
            <h2 className="position">{props.position}</h2>
            <p><span className="duration"><em>{props.duration}</em></span><br />{props.company}</p>
            {props.detail && <Detail title={props.detail.title} description={props.detail.description} 
            {...(props.detail.link && {link:props.detail.link})} 
            {...(props.detail.linkDescription && {linkDescription:props.detail.linkDescription})}/>}
        </div>
    )
}

export default ExperienceCard;