import React, { useState, useRef } from "react";
import "./ContactForm.css"
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm(
          SERVICE_ID, 
          TEMPLATE_ID, 
          form.current as HTMLFormElement,
          PUBLIC_KEY 
        )
        .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully!');
            handleReset();
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again later.');
        })
    };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <div className="form-name">
            <h3>Name</h3>
            <input
                type="text"
                name="from_name"
                required
                placeholder="Who are you?"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-email">
            <h3>Email</h3>
            <input
                type="email"
                name="from_email"
                required
                placeholder="Please give me your email so I can reach out to you!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="form-message">
            <h3>Message</h3>
            <textarea
                name="message"
                required
                rows={6}
                placeholder="Send me a message and I will get back to you as soon as possible!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default ContactForm;


