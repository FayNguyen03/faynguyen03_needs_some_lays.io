import React from "react";

function Method(props: any){
    return(
        <div className="contactMethod">
            <a href={props.action}><i className={props.icon} /> {props.contact}</a>
        </div>
    )
}

export default Method;