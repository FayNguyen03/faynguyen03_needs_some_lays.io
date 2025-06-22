import React from "react";

type DetailProps = {
    title: string;
    description: string;
    link?: string;
    linkDescription?: string;
}

const Detail:React.FC<DetailProps> = (props: DetailProps) =>{
    return(
        <div className="experienceCardDetail">
            <details>
                <div className="detail">
                    {props.description}
                    <br />
                    {props.link && <a href={props.link}><b>{props.linkDescription}</b></a>}

                </div>
                <summary>
                    {props.title}
                </summary>
            </details>
        </div>
    )
}

export default Detail;