import React from "react";

type DetailProps = {
    description: string;
    link?: string;
    linkDescription?: string;
}

const Detail:React.FC<DetailProps> = (props: DetailProps) =>{
    var descriptionList: string[] = props.description.split(";");

    return(
        <div className="experienceCardDetail">
            <div className="detail">
                {descriptionList.map((desc: string, index: number) => (
                    <p key={index}>{desc.trim()}</p>))}
                {props.link && <a href={props.link}><b>{props.linkDescription}</b></a>}
            </div>
        </div>
    )
}

export default Detail;