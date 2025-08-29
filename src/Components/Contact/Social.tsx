import React from "react";
import "./Social.css";

function Social(props:any){
    return <a href={props.action} className="social-icon"><i className={props.icon}></i></a>
}

export default Social;