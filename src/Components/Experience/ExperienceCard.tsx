import React from "react";
import Detail from "./Detail"
import "./ExperienceCard.css"

type ExperienceCardProps = {
    icon: string;
    position: string;
    duration: string;
    company: string;
    detail?: {
        description: string;
        link?: string;
        linkDescription?: string;
    },
    icons: string[]
}

const ExperienceCard:React.FC<ExperienceCardProps> = (props: ExperienceCardProps) =>{
    return(
        <div className="experienceCard">
            <i className={props.icon}></i>
            <div className='titleSection'>
                <h2 className="position">{props.position}</h2>
                <p><span className="duration"><em>{props.duration}</em></span><br /><span className="company">{props.company}</span></p>
            </div>
            <div className="detailSection">
                {props.detail && <Detail description={props.detail.description} 
                {...(props.detail.link && {link:props.detail.link})} 
                {...(props.detail.linkDescription && {linkDescription:props.detail.linkDescription})}
                {...(props.icons && {icons: props.icons})}/>}
            </div>
        </div>  
    )
};

export default ExperienceCard;