import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members');
        setMembers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch members');
        setLoading(false);
        console.error(err);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="view-members-container">
      <h1>Team Members</h1>
      <div className="members-grid">
        {members.map((member) => (
          <div key={member._id} className="member-card">
            <div className="member-image">
              <img
                src={`http://localhost:5000/uploads/${member.image}`}
                alt={member.name}
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="email">{member.email}</p>
              <Link to={`/members/${member._id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
