import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_szmpd4l', 'template_00d4828', form.current, {
        publicKey: 'bD66OWwtEg-DTQmKr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage(alert('Your message has been sent successfully!'));
          form.current.reset();
          setTimeout(() => setSuccessMessage(''), 2000); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {successMessage && <div className="successMessage">{successMessage}</div>}
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="user_name" id="name" placeholder="Name" />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="email" name="user_email" id="email" placeholder="Email" />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea name="message" id="message" placeholder="Message"></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
