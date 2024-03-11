import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
      <h1 className="display-4">About Me</h1>
      <p className="lead">I'm a passionate developer who loves creating awesome websites and applications.</p>
      <p className="lead">Feel free to contact me for any inquiries or collaboration opportunities.</p>
      <Link to="/" className="btn btn-primary">Go back to Home</Link>
    </div>
  );
}

export default About;
