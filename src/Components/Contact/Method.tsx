import "./Method.css";

function Method(props: any){
    return(
        <div className="contact-method">
            <a href={props.action} className='method-item'><i className={props.icon} /> {props.contact}</a>
        </div>
    )
}
export default Method;