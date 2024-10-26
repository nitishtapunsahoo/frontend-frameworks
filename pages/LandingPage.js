import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to GreenThumb Plant Store</h1>
      <p>Providing fresh, vibrant plants to brighten up your space.</p>
      <Link to="/products" className="get-started-button">Get Started</Link>
    </div>
  );
}

export default LandingPage;
