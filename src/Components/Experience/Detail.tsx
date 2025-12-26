import React from "react";
import ExperienceIcon from "./ExperienceIcon";
import "./Detail.css";
type DetailProps = {
    description: string;
    link?: string;
    linkDescription?: string;
    icons?: string[];
}

const Detail:React.FC<DetailProps> = (props: DetailProps) =>{
    var descriptionList: string[] = props.description.split(";");

    return(
        <div className="experienceCardDetail">
            <div className="detail">
                {descriptionList.map((desc: string, index: number) => (
                    <p key={index}>{desc.trim()}</p>))}
                {props.link && <a href={props.link}><b>{props.linkDescription}</b></a>}
                <div className="experience-icons">
                    {props.icons && props.icons.length > 0 && <ExperienceIcon icons={props.icons} />}
                </div>
            </div>
        </div>
    )
}

export default Detail;