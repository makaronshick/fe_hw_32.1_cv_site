import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.styles.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
      <div className="not-found-emoji">😵</div>
      <Link to="/" className="not-found-link">
        Take me home
      </Link>
    </div>
  );
}

export default NotFound;