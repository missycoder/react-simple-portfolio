import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h1 className="display-4">Contact Me</h1>
      <p className="lead">Feel free to reach out to me via email at: example@example.com</p>
      <p className="lead">You can also connect with me on LinkedIn: <a href="https://www.linkedin.com/" className="link-primary">My LinkedIn Profile</a></p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
