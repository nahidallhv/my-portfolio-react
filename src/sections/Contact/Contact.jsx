// import styles from './ContactStyles.module.css';

// function Contact() {
//   return (
//     <section id="contact" className={styles.container}>
//       <h1 className="sectionTitle">Contact</h1>
//       <form action="">
//         <div className="formGroup">
//           <label htmlFor="name" hidden>
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Name"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="email" hidden>
//             Email
//           </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="message" hidden>
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Message"
//             required></textarea>
//         </div>
//         <input className="hover btn" type="submit" value="Submit" />
//       </form>
//     </section>
//   );
// }

// export default Contact;



// src/sections/Contact.jsx
import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://nahidallhv.vercel.app/src/sections/api/Contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Mesajınız gönderildi!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Mesaj gönderilirken bir hata oluştu.');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email" // E-posta için uygun type
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
