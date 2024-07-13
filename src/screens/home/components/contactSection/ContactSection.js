import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

const ContactSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
    <div className="contact-section text-center mt-5" style={{ width: '100%' }}>
      <div className='contact-content' style={{ width: isSmallScreen ? '100%' : '60%' }}>
        <h1 className="contact-title" style={{ width: '100%' }}>LETS SCHEDULE A TIME TO CHAT</h1>
        <h1 className='contact-title' style={{ width: '100%' }}>COFFEE IS ON ME</h1>
        
        <form onSubmit={sendEmail} className="email-form mt-5" style={{ width: '100%' }}>
          <div className="form-group" style={{ width: '100%' }}>
            <input type="text" name="user_name" className="form-control" placeholder="Your Name" required style={{ width: '100%' }} />
          </div>
          <div className="form-group mt-3" style={{ width: '100%' }}>
            <input type="email" name="user_email" className="form-control" placeholder="Your Email" required style={{ width: '100%' }} />
          </div>
          <div className="form-group mt-3" style={{ width: '100%' }}>
            <textarea name="message" className="form-control" placeholder="Your Message" required style={{ width: '100%' }}></textarea>
          </div>
          <button type="submit" variant="secondary" className="btn btn-secondary email-button mt-3" style={{ width: '60%' }}>Email Me</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
