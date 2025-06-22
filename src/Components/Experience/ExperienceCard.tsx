import React from "react";
import Detail from "./Detail"
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
        <div className="experience-card">
            <h2>{props.position}</h2>
            <p><span className="duration"><em>{props.duration}</em></span><br />{props.company}</p>
            {props.detail && <Detail title={props.detail.title} description={props.detail.description} 
            {...(props.detail.link && {link:props.detail.link})} 
            {...(props.detail.linkDescription && {linkDescription:props.detail.linkDescription})}/>}
        </div>
    )
}

export default ExperienceCard;