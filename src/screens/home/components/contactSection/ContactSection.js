
import React from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_suadlxd', 'template_vgw5h8n', e.target, 'hQlTc-DR44Rw5ebKP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="contact-section text-center mt-5">
      <div className='contact-content'>
        <h1 className="contact-title">LETS SCHEDULE A TIME TO CHAT</h1>
        <h1 className='contact-title'>COFFEE IS ON ME</h1>
        
        <form onSubmit={sendEmail} className="email-form mt-5">
          <div className="form-group">
            <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="form-group mt-3">
            <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="form-group mt-3">
            <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary email-button mt-3">Email Me</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
