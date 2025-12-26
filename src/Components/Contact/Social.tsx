import "./Social.css";

function Social(props:any){
    return <a href={props.action} className="social-icon"><i className={props.icon} id={props.id}></i></a>
}

export default Social;