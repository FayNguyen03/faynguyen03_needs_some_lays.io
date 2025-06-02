import React from "react";

function Social(props:any){
    return <a href={props.action}><i className={props.icon} id={props.id}></i></a>
}

export default Social;