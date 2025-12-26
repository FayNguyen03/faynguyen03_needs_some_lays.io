import Method from "./Method";
import Social from "./Social";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact(){
    return <div className="contact" id="contact">
        <div className="contact-left">
            <Method action="mailto:faynguyen03@gmail.com" icon="fa-regular fa-envelope" contact="faynguyen03@gmail.com"/>
            <Method action="mailto:nguyen94@stolaf.edu" icon="fa-solid fa-envelope" contact="nguyen94@stolaf.edu"/>
            <Method action="tel:5075819201" icon="fa-solid fa-mobile" contact="5075819201"/>
            <div className="social-icons">
                <Social action="https://www.facebook.com/nguyen.tra.khanh.1212/" icon="fa-brands fa-facebook-f"/>
                <Social action="https://github.com/FayNguyen03" icon="fa-brands fa-github"/>
                <Social action="https://www.linkedin.com/in/faynguyen03/" icon="fa-brands fa-linkedin" />
                <Social action="Fay_Nguyen_2026_Resume.pdf" icon="fa-regular fa-file" id="resume"/>
            </div>
        </div>

        <div className="contact-right">
            <ContactForm />
        </div>
    </div>
}

export default Contact;