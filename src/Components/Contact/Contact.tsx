import React from "react";
import Method from "./Method";
import Social from "./Social";
import ContactForm from "./ContactForm";

function Contact(){
    return <div className="row">
        <div className="contact-left">
            <Method action="mailto:nguyen94@stolaf.edu" icon="fa-solid fa-envelope" contact="nguyen94@stolaf.edu"/>
            <Method action="mailto:ntkhanh391914@gmail.com" icon="fa-regular fa-envelope" contact="ntkhanh391914@gmail.com"/>
            <Method action="tel:5075819201" icon="fa-solid fa-mobile" contact="5075819201"/>
            <div className="social-icons">
                <Social action="https://www.facebook.com/nguyen.tra.khanh.1212/" icon="fa-brands fa-facebook-f"/>
                <Social action="https://github.com/FayNguyen03" icon="fa-brands fa-github"/>
                <Social action="https://www.linkedin.com/in/faynguyen03/" icon="fa-brands fa-linkedin" />
                <Social action="../../public/Khanh_Nguyen_2026_Resume.pdf" icon="fa-regular fa-file" id="resume"/>
            </div>
        </div>

        <div className="contact-rights">
            <ContactForm />
        </div>
    </div>
}

export default Contact;