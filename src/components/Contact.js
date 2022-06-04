import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY)

            .then((result) => {
                document.getElementById('contact-form').reset();
                alert('Your message has been successfully sent to me!')
            }, (error) => {
                alert('Your message has not been sent to me!')

            });
    };

    return (
        <section id='contact-section'>
            <h1 className='type-style heading-primary'>contact me</h1>
            <form id='contact-form' ref={form} onSubmit={sendEmail}>
                <div className="form-row">
                    <label htmlFor="user_name">Name</label>
                    <input required type="text" id="user_name" name="user_name" />
                </div>
                <div className="form-row">
                    <label htmlFor="user_email">Email</label>
                    <input required type="email" id="user_email" name="user_email" />
                </div>
                <div className="form-row">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" />
                </div>
                <input required className='submit-btn' type="submit" value="Send" />
            </form>
        </section>
    );

};

export default Contact;