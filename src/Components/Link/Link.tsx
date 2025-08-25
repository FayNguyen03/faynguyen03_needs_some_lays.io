import React from "react";

function Link(props: {href: string, text: string, class: string}){
    return <a className={props.class} href={props.href}>{props.text}</a>
}

export default Link;