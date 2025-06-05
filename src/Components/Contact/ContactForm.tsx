import React, {useState} from "react";

function ContactForm(){
    let [numRow, setNumRow] = useState(1);
    return (
    <div>
        <input type="text" className="Name" placeholder="I need to know your name!" required />
        <input type="email" className="Email" placeholder="Please give me your email, my lovely stranger!" required />
        <textarea className="Message" rows={numRow} placeholder="Send me a message and I will reach back to you ASAP!" required />
        <div className="contactButtonBorder"><button type="submit" className="contactButton">Send</button></div>
    </div>
    );
}

export default ContactForm;