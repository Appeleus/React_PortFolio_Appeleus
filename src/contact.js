// contact.js
import React from 'react';
import './contact.css';

const Contact = ({ onClose }) => {

    const handleOverlayClick = (e) => {
        // Close the modal if the click is outside the modal content
        if (e.target.classList.contains('contact-modal')) {
          onClose();
        }
      };

  return (
    <div className="contact-modal" onClick={handleOverlayClick}>
      <div className="contact-content">
        <h1>Phantakorn Sangjinda</h1>
        <h1>(GOT)</h1>
        <hr></hr>
        <p>Average right brain user who also wants to do some coding🖥</p>
        <h1>Email</h1>
        <p>gotkunglovely@outlook.co.th</p>

        <h1>Discord</h1>
        <p>delicious_apple</p>
        {/* Add more contact information as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Contact;
