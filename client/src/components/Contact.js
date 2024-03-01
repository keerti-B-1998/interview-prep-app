import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <>
      <div className="s-container">
        <h2 align="center">Contact Us</h2><br />
        <div className="wrapper">
          <div className="c-info">
            <h2>Have Any Questions... ?</h2><br /><br></br>
            <h5><i className="fa fa-phone"></i> (+91) 8277547742<br /><br />
            <i className="fa fa-map-marker"></i> Shahapur Belgaum Karnataka India.<br /><br />
            <i className="fa fa-envelope"></i> bhagavantanavarKeerti@gmail.com<br /><br /><br /><br /><br /><br /><br /></h5>
            <hr />
          </div>
          <div className="contact">
            <h2>E-mail Us</h2><br></br>
            <form id="contact-form">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>
              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p>
                <label>Subject</label>
                <input type="text" name="subject" id="company" />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
