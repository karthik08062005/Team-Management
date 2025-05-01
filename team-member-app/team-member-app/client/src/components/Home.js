import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Team Member Management</h1>
        <p>Manage your team members efficiently and effectively</p>
        <div className="cta-buttons">
          <Link to="/add" className="btn primary-btn">Add New Member</Link>
          <Link to="/members" className="btn secondary-btn">View Members</Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Team Management</h3>
          <p>Easily manage and organize your team members</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📸</div>
          <h3>Profile Photos</h3>
          <p>Add and manage profile photos for each member</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Quick Access</h3>
          <p>Fast and easy access to member information</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
