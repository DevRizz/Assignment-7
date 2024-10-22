import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder='Enter your name' id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder='Enter your mail' id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder='Enter your message' name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;