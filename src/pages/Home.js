import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1 className="display-4">Welcome to My Portfolio</h1>
      <p className="lead">This is the homepage of my portfolio. Feel free to explore!</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/about" className="btn btn-primary me-md-2 mb-2">About Me</Link>
        <Link to="/contact" className="btn btn-secondary mb-2">Contact Me</Link>
      </div>
    </div>
  );
}

export default Home;
