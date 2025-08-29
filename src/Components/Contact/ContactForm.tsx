import React, { useState, useEffect } from "react";
import "./ContactForm.css"
import { useNavigate } from "react-router";

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<Error|null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        navigate("/contact");
    };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <div className="form-name">
            <h3>Name</h3>
            <input
                type="text"
                required
                placeholder="Who are you?"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-email">
            <h3>Email</h3>
            <input
                type="email"
                required
                placeholder="Please give me your email so I can reach out to you!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="form-message">
            <h3>Message</h3>
            <textarea
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