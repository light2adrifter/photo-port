import React, { useState } from 'react';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    <input type="email" name="email" defaultValue={formState.name} />
    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    ;
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div><div>
                    <label htmlFor="message"></label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;